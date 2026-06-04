import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const assets = path.resolve(__dirname, '../src/assets')

const input = path.join(assets, 'jb-mark.png')
const output = path.join(assets, 'jb-mark-trimmed.png')

const { data, info } = await sharp(input)
  .flatten({ background: '#ffffff' })
  .raw()
  .toBuffer({ resolveWithObject: true })

const { width, height, channels } = info
let minX = width,
  minY = height,
  maxX = 0,
  maxY = 0

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]
    // Treat near-white as background.
    if (!(r > 238 && g > 238 && b > 238)) {
      if (x < minX) minX = x
      if (x > maxX) maxX = x
      if (y < minY) minY = y
      if (y > maxY) maxY = y
    }
  }
}

const cropW = maxX - minX + 1
const cropH = maxY - minY + 1
const pad = Math.round(Math.max(cropW, cropH) * 0.1)

await sharp(input)
  .flatten({ background: '#ffffff' })
  .extract({ left: minX, top: minY, width: cropW, height: cropH })
  .extend({
    top: pad,
    bottom: pad,
    left: pad,
    right: pad,
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  })
  .png()
  .toFile(output)

const out = await sharp(output).metadata()
console.log(`bbox ${cropW}x${cropH} -> output ${out.width}x${out.height}`)
