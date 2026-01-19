# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Astro, TailwindCSS, and optional React components. Static-first architecture with markdown/YAML content sources.

## Commands

```bash
pnpm install              # Install dependencies (uses frozen lockfile in CI)
pnpm run dev              # Start dev server
pnpm run build            # Production build to /dist
pnpm run preview          # Preview production build
```

No test suite is configured.

## Architecture

**Framework**: Astro v5 with React integration for interactive components

**Routing**: File-based via `/src/pages/` (index.astro, resume.astro, colophon.astro, history.astro)

**Layout**: Single `Layout.astro` wrapper used by all pages, includes `SiteHead.astro` for meta tags

**Content Sources**:
- Markdown files (`resume.md`, `colophon.md`) converted via showdown at build time
- YAML data (`history.yml`) for work history
- TypeScript exports (`home.tsx`) for homepage data

**Components**: `/src/components/` organized by feature (home/, footer/, decorations/, ribbon/)

**Utilities**: `/src/library/` contains shared functions (debounce, random, ready, utils)

**Styling**: TailwindCSS with custom theme in `tailwind.config.cjs`:
- Custom colors: `ryan-off-white`, `ryan-black`
- Custom fonts: League Gothic, Pacifico, Atkinson Hyperlegible
- Custom animations: fadeY, fadeX, superSpin, superPulse, helloWave

**Client Scripts**: TypeScript files for browser interactivity use custom `ready()` utility for DOM readiness

## Deployment

GitHub Actions deploys to VPS via rsync on push to main. Feature branches (`feature-**`) run build-only validation.

## Planning

When creating implementation plans, store them in `.claude/plans/` with an index-codename format:
- Example: `.claude/plans/001-history-refactor.md`
- Increment the index for each new plan
