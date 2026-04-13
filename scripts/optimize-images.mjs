#!/usr/bin/env node
/**
 * Image optimization script for regentribe.co
 * Converts JPG/PNG → WebP and generates responsive variants (640w, 1024w, 1920w)
 * Outputs alongside originals in the same directory
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';

import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public', 'images');
const WIDTHS = [640, 1024, 1920];
const QUALITY_PHOTO = 80;
const QUALITY_SCREENSHOT = 85;
const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);
// Skip logo files — must remain as PNG per project rules
const SKIP_DIRS = new Set(['logos']);

let stats = { converted: 0, skipped: 0, variants: 0, errors: 0 };

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      files.push(...await getFiles(fullPath));
    } else if (EXTENSIONS.has(extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

function isScreenshot(filePath) {
  // Platform screenshots and UI captures get higher quality
  return filePath.includes('tribes-platform') || filePath.includes('screenshots');
}

async function isNewer(src, dest) {
  try {
    const [srcStat, destStat] = await Promise.all([stat(src), stat(dest)]);
    return destStat.mtimeMs >= srcStat.mtimeMs;
  } catch {
    return false; // dest doesn't exist
  }
}

async function optimizeImage(filePath) {
  const ext = extname(filePath);
  const name = basename(filePath, ext);
  const dir = dirname(filePath);
  const quality = isScreenshot(filePath) ? QUALITY_SCREENSHOT : QUALITY_PHOTO;

  // Get original image metadata
  let metadata;
  try {
    metadata = await sharp(filePath).metadata();
  } catch (err) {
    console.error(`  Error reading ${filePath}: ${err.message}`);
    stats.errors++;
    return;
  }

  const originalWidth = metadata.width;

  // 1. Generate full-size WebP
  const webpPath = join(dir, `${name}.webp`);
  if (await isNewer(filePath, webpPath)) {
    stats.skipped++;
  } else {
    try {
      let pipeline = sharp(filePath);
      // WebP has a max dimension of 16383px — resize if needed
      if (originalWidth > 16383 || (metadata.height && metadata.height > 16383)) {
        pipeline = pipeline.resize({ width: Math.min(originalWidth, 16383), height: 16383, fit: 'inside', withoutEnlargement: true });
      }
      await pipeline.webp({ quality }).toFile(webpPath);
      stats.converted++;
      console.log(`  ✓ ${name}.webp`);
    } catch (err) {
      console.error(`  ✗ ${name}.webp — ${err.message}`);
      stats.errors++;
    }
  }

  // 2. Generate responsive width variants
  for (const width of WIDTHS) {
    if (originalWidth <= width) continue; // Skip if image is already smaller

    const variantPath = join(dir, `${name}-${width}w.webp`);
    if (await isNewer(filePath, variantPath)) {
      continue;
    }

    try {
      await sharp(filePath)
        .resize({ width, height: 16383, fit: 'inside', withoutEnlargement: true })
        .webp({ quality })
        .toFile(variantPath);
      stats.variants++;
      console.log(`  ✓ ${name}-${width}w.webp`);
    } catch (err) {
      console.error(`  ✗ ${name}-${width}w.webp — ${err.message}`);
      stats.errors++;
    }
  }
}

async function main() {
  console.log('Optimizing images in public/images/...\n');

  const files = await getFiles(PUBLIC_DIR);
  console.log(`Found ${files.length} images to process\n`);

  // Process in batches of 5 to avoid memory pressure
  for (let i = 0; i < files.length; i += 5) {
    const batch = files.slice(i, i + 5);
    await Promise.all(batch.map(optimizeImage));
  }

  console.log(`\nDone!`);
  console.log(`  Converted: ${stats.converted}`);
  console.log(`  Variants:  ${stats.variants}`);
  console.log(`  Skipped:   ${stats.skipped} (already up to date)`);
  console.log(`  Errors:    ${stats.errors}`);
}

main().catch(console.error);
