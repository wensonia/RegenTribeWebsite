import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'images', 'tribes-platform');

const pages = [
  { name: 'neighborhoods', url: 'https://tribesplatform.app/neighborhoods/' },
  { name: 'members', url: 'https://tribesplatform.app/members/' },
  { name: 'forums', url: 'https://tribesplatform.app/forums/' },
  { name: 'regen-orgs', url: 'https://tribesplatform.app/regen-orgs/' },
  { name: 'events', url: 'https://tribesplatform.app/events/' },
];

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 375, height: 812 },
  deviceScaleFactor: 2,
});

for (const p of pages) {
  const page = await context.newPage();
  console.log(`Capturing ${p.name} from ${p.url}...`);
  await page.goto(p.url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: path.join(outDir, `${p.name}.png`),
    clip: { x: 0, y: 0, width: 375, height: 812 },
  });
  console.log(`  Saved ${p.name}.png`);
  await page.close();
}

await browser.close();
console.log('Done — all screenshots captured.');
