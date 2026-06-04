import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const assets = path.resolve(__dirname, '../src/assets')

const input = path.join(assets, 'jb-academy.png')
const output = path.join(assets, 'jb-academy-logo.png')

const trimmed = await sharp(input)
  .trim({ background: '#000000', threshold: 20 })
  .toBuffer()

// Re-pad with a small transparent margin so it isn't edge-to-edge.
const meta = await sharp(trimmed).metadata()
const pad = Math.round(Math.max(meta.width, meta.height) * 0.06)

await sharp(trimmed)
  .extend({
    top: pad,
    bottom: pad,
    left: pad,
    right: pad,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toFile(output)

const out = await sharp(output).metadata()
console.log(`original -> trimmed: ${out.width}x${out.height}`)
