import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'dist');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'style.css', 'assets', 'CV-Francois-Aubeut.pdf', 'robots.txt', 'sitemap.xml']) {
  await cp(resolve(root, file), resolve(output, file), { recursive: true });
}
console.log('Site statique construit dans dist/.');
