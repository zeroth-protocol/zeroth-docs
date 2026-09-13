# Zeroth Protocol Website

Canonical public website implementation for **The Zeroth Protocol** — the economic operating system for autonomous AI.

## Design authority

**Claude Design is the website UI source of truth.** Figma is the conformant production reconstruction. This repository is the downstream implementation and must not introduce independent visual reinterpretation. See [`docs/DESIGN_GOVERNANCE.md`](docs/DESIGN_GOVERNANCE.md).

## Stack

- Next.js 16.3.4 / React 19
- TypeScript
- Storybook 10.6
- Native CSS using Zeroth design tokens
- Canvas-based protocol simulation with `prefers-reduced-motion` fallback

## Routes

`/` · `/protocol` · `/povw` · `/technology` · `/economics` · `/research` · `/developers` · `/ecosystem` · `/governance` · `/docs` · `/blackpaper`

## Local development

```bash
npm install
npm run dev
```

Quality gates:

```bash
npm run typecheck
npm run lint
npm test
npm run build
npm run build-storybook
```

## Status

This branch begins the Figma → implementation gate. Production deployment remains blocked until exact-head CI, browser acceptance, accessibility review, visual regression against the canonical Figma screens, and independent code review all pass.
