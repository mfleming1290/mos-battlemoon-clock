import assert from 'node:assert/strict';
import { mkdirSync, readFileSync, copyFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const pin = JSON.parse(readFileSync(path.join(root, 'battlemoon-source.json')));
assert.match(pin.revision, /^[a-f0-9]{40}$/);
const artifacts = path.join(root, '.cache/battlemoon'), generated = path.join(root, 'page/src/generated');
mkdirSync(artifacts, { recursive: true }); mkdirSync(generated, { recursive: true });
for (const expected of Object.values(pin.packages)) {
  const source = path.join(root, 'vendor', expected.filename);
  assert.equal('sha512-' + createHash('sha512').update(readFileSync(source)).digest('base64'), expected.integrity);
  copyFileSync(source, path.join(artifacts, expected.filename));
}
// Reuse the reviewed MOS host wrapper, never copy Clock domain code or maintain a second adapter.
copyFileSync(path.join(root, 'adapters/ClockAdapter.mjs'), path.join(generated, 'ClockAdapter.mjs'));
console.log(`PASS verified component artifacts ${pin.revision}; no private access required`);
