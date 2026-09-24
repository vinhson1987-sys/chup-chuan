// Copies the web app into www/ for Capacitor (the PWA on GitHub Pages serves the root directly).
import { mkdirSync, copyFileSync, rmSync } from 'node:fs';
const files = ['index.html', 'manifest.json', 'sw.js', 'icon.svg', 'icon-180.png', 'icon-192.png', 'icon-512.png', 'privacy.html'];
rmSync('www', { recursive: true, force: true });
mkdirSync('www', { recursive: true });
for (const f of files) copyFileSync(f, `www/${f}`);
console.log(`www/ ready (${files.length} files)`);
