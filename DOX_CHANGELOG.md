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
