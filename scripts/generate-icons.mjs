// Regenerates the favicon / app-icon set in public/icons/ from the brand logo.
//
// Run manually (`node scripts/generate-icons.mjs`) after the logo changes — it
// is not part of the build, since the outputs are committed.
//
// Why this exists: apple-touch-icon.png, favicon-16x16.png, favicon-32x32.png
// and ff_logo.png were all byte-identical copies of one 100x92 image. The two
// "favicon" files were not the sizes their names claimed, the source was not
// square, and site.webmanifest declared a single 100x92 "any maskable" icon —
// so it had no valid 192px or 512px icon and failed installability checks.
//
// Uses the Playwright Chromium that is already a devDependency (for the
// prerenderer) rather than adding an image-processing dependency.
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const iconsDir = path.join(rootDir, 'public', 'icons');

const BRAND_GREEN = '#059669';

function dataUri(file) {
  return `data:image/png;base64,${fs.readFileSync(path.join(iconsDir, file)).toString('base64')}`;
}

const targets = [
  // Browser tab favicons: dark mark on white, minimal padding so it stays
  // legible at 16px.
  { out: 'favicon-16x16.png', size: 16, source: 'ff_logo.png', background: '#ffffff', inset: 6 },
  { out: 'favicon-32x32.png', size: 32, source: 'ff_logo.png', background: '#ffffff', inset: 6 },
  // iOS home screen: no transparency allowed, and iOS applies its own rounding.
  { out: 'apple-touch-icon.png', size: 180, source: 'ff_logo.png', background: '#ffffff', inset: 14 },
  // PWA icons at the two sizes the manifest spec expects.
  { out: 'icon-192.png', size: 192, source: 'ff_logo.png', background: '#ffffff', inset: 14 },
  { out: 'icon-512.png', size: 512, source: 'ff_logo.png', background: '#ffffff', inset: 14 },
  // Maskable: the mark inverted to white over brand green, with a generous
  // inset so nothing is lost when a launcher crops to a circle (the safe zone
  // is the middle 80%). ff_logo.png is a black mark on transparency, so
  // invert() gives white-on-green; white_logo.png is the full wordmark and is
  // unusable at icon sizes.
  {
    out: 'maskable-512.png',
    size: 512,
    source: 'ff_logo.png',
    background: BRAND_GREEN,
    inset: 26,
    filter: 'invert(1)',
  },
];

async function main() {
  const browser = await chromium.launch();

  try {
    for (const target of targets) {
      const page = await browser.newPage({
        viewport: { width: target.size, height: target.size },
        deviceScaleFactor: 1,
      });

      await page.setContent(`
        <style>
          html, body { margin: 0; width: 100%; height: 100%; }
          body {
            background: ${target.background};
            display: flex;
            align-items: center;
            justify-content: center;
          }
          img {
            width: ${100 - target.inset * 2}%;
            height: ${100 - target.inset * 2}%;
            object-fit: contain;
            filter: ${target.filter ?? 'none'};
          }
        </style>
        <img src="${dataUri(target.source)}" alt="">
      `);
      await page.waitForLoadState('load');

      const outFile = path.join(iconsDir, target.out);
      await page.screenshot({ path: outFile, type: 'png' });
      await page.close();

      console.log(
        `[icons] ${target.out} (${target.size}x${target.size}) ${fs.statSync(outFile).size} bytes`
      );
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error('[icons] failed:', err);
  process.exit(1);
});
