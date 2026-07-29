import fs from 'node:fs';
import assert from 'node:assert/strict';
const source=fs.readFileSync(new URL('./main.jsx',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('./styles.css',import.meta.url),'utf8');
assert.match(source,/const APP_VERSION='2\.0\.0-RC\d+';/,'Une version RC valide doit être déclarée');
assert.ok(!source.includes('MutationObserver(run)'));
assert.match(css,/RC20 — CONTRASTE FIXE/);
console.log('RC20 stability: OK');
