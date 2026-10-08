## 2026-10-08T13:24:45Z — Public Clock release source preparation

- Request: Prepare approved public MOS Clock source with numeric-tag Actions release and no private repository dependency.
- Result: completed source preparation; publication pending. Exact 0.1.1 archives match Battle; seven built-federation tests and frontend build pass. No NAS mutation or shared-runtime change.
- Files:
  - Created: .github/workflows/build-plugin.yml, .gitignore, AGENTS.md, README.md, adapters/ClockAdapter.mjs, battlemoon-source.json, package.json, settings.json, page/package.json, page/package-lock.json, page/plugin.config.js, page/vite.config.js, page/src/Plugin.vue, page/src/Widget.vue, page/src/PluginPage.mjs, page/src/settings.mjs, tests/plugin.test.mjs, tools/prepare.mjs, tools/package.mjs, tools/check.mjs, vendor/battlemoon-clock-0.1.1.tgz, vendor/battlemoon-component-contracts-0.1.1.tgz, notices/README.md, notices/skir-client-LICENSE.txt, notices/vite-plugin-federation-LICENSE.txt, DOX_CHANGELOG.md.
  - Modified/Moved/Deleted: None in existing repositories.
- Validation: passed frontend build, seven tests, exact manifest/integrity comparison to Battle, approved archive inventory and credential/path scan. Package/clean Linux Actions/release validation pending. Third-party notice trailing whitespace normalized without changing terms.
- DOX: Added concise root contract; README owns build, settings and rollback.
- Remaining: Clean Linux package/build, public release and Hub discovery; E5 actual MOS acceptance remains partial, E6 blocked.
- Next: Publish only after package inventory and clean Actions build pass; stop before installation.

## 2026-10-08T13:36:29Z — Verified public numeric release and Hub discovery

- Request: Publish approved public Clock repository/release, preserve private-source boundary, register Hub and verify discovery read-only; user subsequently reported installation and supplied settings/Hub screenshots.
- Result: completed release/discovery scope. Public numeric tag 0.1.0 points to a06361b0d40f26bf3a66da1ebe24ea2264efbb23. Main Actions 37784310383 and tag build/release 37784419026 pass. All five assets downloaded and checksummed; public URLs and source-at-tag verified. Hub commit 4d60fb43c44f7c00bb254af0040b7119ae80602f contains only the three intended catalog/icon/manifest files. User-installed MOS manifest and all six assets match the release; screenshots prove real settings-page rendering and Hub Installed card, not ticking/save/cleanup.
- Files:
  - Created:
    - .github/workflows/build-plugin.yml
    - .gitignore
    - AGENTS.md
    - README.md
    - adapters/ClockAdapter.mjs
    - battlemoon-source.json
    - package.json
    - settings.json
    - page/package.json
    - page/package-lock.json
    - page/plugin.config.js
    - page/vite.config.js
    - page/src/Plugin.vue
    - page/src/Widget.vue
    - page/src/PluginPage.mjs
    - page/src/settings.mjs
    - tests/plugin.test.mjs
    - tools/prepare.mjs
    - tools/package.mjs
    - tools/check.mjs
    - vendor/battlemoon-clock-0.1.1.tgz
    - vendor/battlemoon-component-contracts-0.1.1.tgz
    - notices/README.md
    - notices/skir-client-LICENSE.txt
    - notices/vite-plugin-federation-LICENSE.txt
    - DOX_CHANGELOG.md
  - Modified: DOX_CHANGELOG.md (post-release record remains local; immutable source tag retained).
  - Moved/Renamed: None.
  - Deleted: tools/replay.mjs (task-created staging copy only; never published).
- Validation: passed seven mounted federation tests, frontend/package checks, exact Battle package pins, reviewed public source inventory, clean Ubuntu Actions, fresh public tag clone with disabled credential helper and empty npm cache, source/Debian build, byte-identical rebuilt versus published web assets, MD5/SHA256 public downloads, actual installed asset equality, 17 JSON files/four local links and diff checks. Architecture all is frontend-only; no native architecture execution claim. Shared archives unchanged at 0.1.1; no private repository access, runtime modification or agent NAS mutation.
- DOX: Concise root contract and source provenance retained; local MOS Hub evidence owns live acceptance.
- Remaining: E5 actual ticking/settings reload/dashboard/lifecycle acceptance; E6 blocked on E5. No approved release/discovery machine work remains.
- Next: Bounded authorized real-MOS acceptance; preserve immutable release and use MOS-owned rollback only with approval.

## 2026-10-08T14:26:16Z — Preserve release receipt and synchronize documentation

- Request: Verify public source/release and preserve pre-existing local post-release receipt during ecosystem synchronization.
- Result: completed verification/preparation. Starting HEAD and immutable numeric tag 0.1.0 remain a06361b0d40f26bf3a66da1ebe24ea2264efbb23; backup/pre-sdk-sync-20261008 preserves it. Pre-existing 40-line release receipt is retained, not overwritten. Main receives documentation only; tag/assets/package bytes are unchanged. Actual MOS user observations and read-only post-reinstall asset equality close E5/E6 in Battle evidence. Normal final main push/status follows this record; no release job is invoked by a main documentation push.
- Files:
  - Created: None.
  - Modified:
    - DOX_CHANGELOG.md
  - Moved/Renamed: None.
  - Deleted: None.
- Validation: passed fresh downloads of all five assets, Debian/source SHA256 and sidecars/MD5, immutable tag and successful original Actions builds, exact unchanged Clock/contracts manifest/archive/lock integrity; scoped diff check. No build, package/version/dependency, release/tag or NAS modification.
- DOX: Historical receipt preserved and this record supersedes its old pending-E5 wording; no new status artifact.
- Remaining: Final ordinary main push/status verification follows this record.
- Next: No plugin work required for SDK baseline; do not republish 0.1.0.
