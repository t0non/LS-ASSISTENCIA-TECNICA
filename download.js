import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

const dirname = path.resolve();
const outDir = path.join(dirname, 'public', 'assets');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const images = {
  'brand-samsung.png': 'https://files.catbox.moe/iaa1xk.png',
  'brand-lg.png': 'https://files.catbox.moe/9rgs36.png',
  'brand-panasonic.png': 'https://files.catbox.moe/06mgnk.png',
  'brand-consul.png': 'https://files.catbox.moe/oif82e.png',
  'brand-midea.png': 'https://files.catbox.moe/8utqc5.png',
  'brand-electrolux.png': 'https://files.catbox.moe/3nub56.png',
  'brand-brastemp.png': 'https://files.catbox.moe/h6q929.png',
  'brand-esmaltec.png': 'https://files.catbox.moe/ddkyct.png',
  'service-fridge.png': 'https://files.catbox.moe/aic6ep.png',
  'service-wash.png': 'https://files.catbox.moe/vks8sm.png',
  'service-frigobar.png': 'https://files.catbox.moe/10v07p.png',
  'service-dish.png': 'https://files.catbox.moe/450d06.png',
  'step1-whatsapp.png': 'https://files.catbox.moe/o8hv0e.png',
  'step2-tech.png': 'https://files.catbox.moe/trxbfm.png',
  'step3-done.png': 'https://files.catbox.moe/18yvne.png',
  'logo.webp': 'https://files.catbox.moe/8yqi8a.webp',
  'hero.jpg': 'https://files.catbox.moe/mgqsis.jpg',
  'cubes-pattern.png': 'https://www.transparenttextures.com/patterns/cubes.png',
  'icon-warranty.png': 'https://files.catbox.moe/5oaq5g.png',
  'icon-fast.png': 'https://files.catbox.moe/rxb0zf.png',
  'icon-fairprice.png': 'https://files.catbox.moe/e8mxca.png',
  'carbon-pattern.png': 'https://www.transparenttextures.com/patterns/carbon-fibre.png',
  'google-star.png': 'https://files.catbox.moe/ejplhw.png',
  'contact-tech.png': 'https://files.catbox.moe/cmdgvn.png'
};

const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function download(url, dest, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      const fileStream = fs.createWriteStream(dest, { flags: 'wx' });
      await finished(Readable.fromWeb(res.body).pipe(fileStream));
      return; 
    } catch (err) {
      if (err.code === 'EEXIST') {
        return; // File already exists
      }
      console.log(`Retry ${i+1}/${retries} for ${url} due to error: ${err.message}`);
      await delay(2000);
    }
  }
  throw new Error(`Failed to download ${url} after ${retries} retries`);
}

async function run() {
  for (const [filename, url] of Object.entries(images)) {
    const dest = path.join(outDir, filename);
    if (!fs.existsSync(dest)) {
      console.log(`Downloading ${url} to ${filename}...`);
      await download(url, dest);
    } else {
      console.log(`${filename} already exists, skipping.`);
    }
  }
  console.log('All downloads complete!');
}

run().catch(console.error);
