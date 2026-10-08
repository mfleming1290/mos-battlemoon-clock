# Battlemoon Clock for MOS

Frontend-only MOS page and dashboard widget. Uses MOS's shared Vue runtime; no backend daemon or desktop runtime.

## Build

Node 22, npm, Git and Debian dpkg-deb (Ubuntu 24.04 in CI):

```sh
npm run prepare:components
npm --prefix page ci --ignore-scripts --no-audit --no-fund
npm run build
npm test
npm run check
npm run package
npm run check -- --package
```

Preparation verifies the supplied component archives against [battlemoon-source.json](battlemoon-source.json). No private repository credentials are required. Registry dependencies are lockfile-pinned. The small host wrapper comes from the same upstream revision; Clock domain logic remains inside the exact shared package.

Publish numeric tags starting with 0.1.0. Actions tests before publishing a complete release. Existing artifacts are never overwritten. Architecture `all` means frontend-only, not verified native binaries for every architecture. MOS reads configuration from root source at the tag.

## Settings, provenance and limits

The page uses MOS's existing authenticated settings API. Locale, timezone, seconds and 12-hour display use the shared validator. Widgets load settings on mount; remount/reload applies changes. Timers are host-owned and released on unmount. Instances are independent. Vue is supplied by MOS federation with no bundled fallback.

Clock and component-contracts are 0.1.1 from revision `833075ac26cd8d5ebc67d131d3a77fa3a7a17c7e`. Exact SHA-512 identities are in the provenance manifest. Only the two approved component archives and MOS wrapper are redistributed, not the private desktop runtime.

Local tests do not establish actual NAS acceptance. Installation requires separate approval. Use normal MOS management for authorized installation and rollback; no backend service or other plugin is included.
