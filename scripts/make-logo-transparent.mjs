import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assets = path.resolve(__dirname, "../src/assets");
const input = path.join(assets, "jb-academy.png");
const output = path.join(assets, "jb-academy-logo.png");

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;

for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  // Treat near-black as transparent so the logo blends on any background.
  if (r < 40 && g < 40 && b < 40) {
    data[i + 3] = 0;
  }
}

const transparent = await sharp(data, {
  raw: { width, height, channels },
})
  .png()
  .toBuffer();

const trimmed = await sharp(transparent).trim({ threshold: 10 }).toBuffer();

const meta = await sharp(trimmed).metadata();
const pad = Math.round(Math.max(meta.width, meta.height) * 0.04);

await sharp(trimmed)
  .extend({
    top: pad,
    bottom: pad,
    left: pad,
    right: pad,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toFile(output);

const out = await sharp(output).metadata();
console.log(`transparent logo saved: ${out.width}x${out.height}`);
