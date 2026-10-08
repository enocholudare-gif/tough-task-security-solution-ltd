const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/PC/.gemini/antigravity/brain/1b328af6-648e-4d22-8167-1caa1917068b/scratch/client_assets';
const targetDir = path.join(__dirname, 'public', 'assets');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy and create canonical names
const files = fs.readdirSync(srcDir);
files.forEach(f => {
  const src = path.join(srcDir, f);
  const dest = path.join(targetDir, f);
  fs.copyFileSync(src, dest);
  console.log(`Copied ${f} -> public/assets/${f}`);
});

// Also make clean aliases
const aliases = {
  'WhatsApp_Image_2025-10-06_at_09.45.26_29ccc71a-removebg-preview.png': 'logo.png',
  'cao.jpg': 'security-leadership.jpg',
  'Untitled-tf.jpg': 'security-parade.jpg',
  'WhatsApp-Image-2025-10-29-at-13.28.04_39f15d8f.jpg': 'security-patrol.jpg',
  '1.jpg': 'service-guarding.jpg',
  '2.jpg': 'service-corporate.jpg',
  '3.jpg': 'service-event.jpg',
  '4.jpg': 'service-cctv.jpg',
  '5.jpg': 'service-escort.jpg'
};

Object.entries(aliases).forEach(([orig, alias]) => {
  const src = path.join(srcDir, orig);
  if (fs.existsSync(src)) {
    const dest = path.join(targetDir, alias);
    fs.copyFileSync(src, dest);
    console.log(`Aliased ${orig} -> public/assets/${alias}`);
  }
});
