import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, copyFileSync, readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import config from '../page/plugin.config.js';
const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'artifacts');
const filename = `${config.name}_${config.version}-1+mos-plugin_all.deb`;
assert(!existsSync(path.join(output, filename)), 'Refusing to overwrite existing artifact');
mkdirSync(output, { recursive: true });
const staging = mkdtempSync(path.join(output, '.package-'));
const web = path.join(staging, 'var/www/mos-plugins', config.name);
mkdirSync(web, { recursive: true }); mkdirSync(path.join(staging, 'DEBIAN'), { recursive: true });
for (const file of readdirSync(path.join(root, 'page/dist', config.name))) copyFileSync(path.join(root, 'page/dist', config.name, file), path.join(web, file));
const notices = path.join(staging, 'usr/share/doc/mos-battlemoon-clock-plugin');
mkdirSync(notices, { recursive: true });
for (const file of readdirSync(path.join(root, 'notices'))) copyFileSync(path.join(root, 'notices', file), path.join(notices, file));
writeFileSync(path.join(staging, 'DEBIAN/control'), `Package: mos-battlemoon-clock-plugin\nVersion: ${config.version}-1+mos-plugin\nArchitecture: all\nMaintainer: mfleming1290\nDescription: Shared Battlemoon Clock for MOS\n`);
function run(command, args) {
  const result = spawnSync(command, args, { cwd: root, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stdout + result.stderr); return result.stdout;
}
if (process.platform === 'win32') {
  const linuxPath = value => run('wsl', ['-d', 'Ubuntu-24.04', '--exec', 'wslpath', '-a', value.replaceAll('\\', '/')]).trim();
  // NTFS mounts expose 0777 modes; dpkg requires real Unix control-directory modes.
  const linuxStage = run('wsl', ['-d', 'Ubuntu-24.04', '--exec', 'mktemp', '-d', '/tmp/mos-clock-package-XXXXXX']).trim();
  assert.match(linuxStage, /^\/tmp\/mos-clock-package-[A-Za-z0-9]+$/);
  run('wsl', ['-d', 'Ubuntu-24.04', '--exec', 'cp', '-R', linuxPath(staging) + '/.', linuxStage]);
  run('wsl', ['-d', 'Ubuntu-24.04', '--exec', 'find', linuxStage, '-type', 'd', '-exec', 'chmod', '0755', '{}', '+']);
  run('wsl', ['-d', 'Ubuntu-24.04', '--exec', 'find', linuxStage, '-type', 'f', '-exec', 'chmod', '0644', '{}', '+']);
  run('wsl', ['-d', 'Ubuntu-24.04', '--exec', 'dpkg-deb', '--root-owner-group', '--build', linuxStage, linuxPath(path.join(output, filename))]);
} else run('dpkg-deb', ['--root-owner-group', '--build', staging, path.join(output, filename)]);
const bytes = readFileSync(path.join(output, filename));
writeFileSync(path.join(output, `${filename}.md5`), createHash('md5').update(bytes).digest('hex') + `  ${filename}\n`);
writeFileSync(path.join(output, `${filename}.sha256`), createHash('sha256').update(bytes).digest('hex') + `  ${filename}\n`);
// Explicit sources only: no dependencies, caches, generated code or built binary inputs.
const archive = `${'mos-' + config.name}-${config.version}-source.zip`;
run('git', ['archive', '--format=zip', '--output=' + path.join(output, archive), 'HEAD']);
writeFileSync(path.join(output, archive + '.sha256'), createHash('sha256').update(readFileSync(path.join(output, archive))).digest('hex') + `  ${archive}\n`);
console.log(`PASS Debian package, checksums and tagged-source input: artifacts/${filename}`);
