# MOS Battlemoon Clock

- Purpose: Public MOS plugin source and numeric-tag release packaging, not the private Battlemoon platform.
- Owns: Root plugin source, page/widget federation, vendor archives, build checks and Actions release.
- Inputs: Exact Clock/contracts archives and source revision in battlemoon-source.json; host-provided Vue and authenticated MOS settings API.
- Invariants: Preserve shared artifact bytes and integrity. Vendor only required approved component archives; require no private repository credentials. Keep source/configuration at repository root. Architecture all is frontend-only. Publish immutable numeric tags after clean build/tests. Retain license notices in source and Debian output.
- Work guidance: README owns build, settings and release procedure. Inspect diff and package inventory before public writes. Actual MOS installation and service changes require separate approval; local tests are not live E5 acceptance.
- Verification: npm scripts; built-federation lifecycle tests; exact package hashes, version agreement, host-only Vue, Debian contents, source archive and release download checks.
- Routes: None.
