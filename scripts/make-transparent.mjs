#!/usr/bin/env node
/**
 * Removes a uniform background color from an image and saves as PNG with alpha.
 * Usage: node scripts/make-transparent.mjs <input> <output> [bg-r] [bg-g] [bg-b] [threshold]
 *
 * Defaults: bg = off-white #f8f8f5 (the niche palette's white), threshold = 22
 *
 * Uses a soft alpha falloff over the threshold so edges feather smoothly.
 */
import sharp from 'sharp'
import { argv, exit } from 'node:process'

const [, , input, output, rArg, gArg, bArg, threshArg] = argv

if (!input || !output) {
  console.error('Usage: make-transparent.mjs <input> <output> [r] [g] [b] [threshold]')
  exit(1)
}

const bgR = Number(rArg ?? 248)
const bgG = Number(gArg ?? 248)
const bgB = Number(bArg ?? 245)
const threshold = Number(threshArg ?? 22)
// Anything within `threshold` is fully transparent. Anything within
// `threshold + featherRange` fades from transparent → opaque.
const featherRange = 18

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

let kept = 0
let removed = 0
let feathered = 0

for (let i = 0; i < data.length; i += 4) {
  const r = data[i]
  const g = data[i + 1]
  const b = data[i + 2]
  const dist = Math.sqrt((r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2)

  if (dist < threshold) {
    data[i + 3] = 0
    removed++
  } else if (dist < threshold + featherRange) {
    const t = (dist - threshold) / featherRange // 0..1
    data[i + 3] = Math.round(255 * t)
    feathered++
  } else {
    kept++
  }
}

await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
  .png({ compressionLevel: 9, palette: false })
  .toFile(output)

const total = kept + removed + feathered
console.log(`✓ ${output}`)
console.log(`  ${info.width}×${info.height} · removed ${((removed / total) * 100).toFixed(1)}% · feathered ${((feathered / total) * 100).toFixed(1)}% · kept ${((kept / total) * 100).toFixed(1)}%`)
