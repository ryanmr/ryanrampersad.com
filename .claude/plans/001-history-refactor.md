# 001: History Page Refactor

## Goal
Refactor the work history system to split content by year, improve authoring experience, and reduce page length.

## Current State (Exploration Notes)

**Data**: Single `src/data/history.yml` file
- 2,626 lines spanning March 2016 to October 2024
- Structure: `when` (date), `entries[]` with `description`, `work_tags`, `topic_tags`
- Descriptions are markdown with nested bullet points

**Components**:
- `history.astro` - Main page, loads all YAML data
- `HistoryDisplay.astro` - Renders all sections with month/year headers
- `HistoryRange.astro` - Shows timeline (March 28, 2016 to now in weeks)
- `history.ts` - `getSections()` transforms raw YAML to formatted data
- `history-types.ts` - TypeScript interfaces

**Pain Points Identified**:
- Entire history loads on one page (very long scroll)
- Single YAML file is large and unwieldy to edit
- No way to navigate to specific years quickly

## Decisions Made

1. **Data structure**: Split into per-year YAML files
2. **File granularity**: One file per year (e.g., `2024.yml`)
3. **Format**: Keep YAML (don't change to markdown or JSON)
4. **Archive pages**: Full entries (same display as today, just filtered)
5. **HistoryRange**: Keep on main `/history` page only (easter egg)
6. **Tag filtering**: Skip (not currently implemented, defer to future)
7. **Month anchors**: Yes, add `#october` style anchors for direct linking

## Implementation Plan

### Phase 1: Data Migration
- Create `src/data/history/` directory
- Split `history.yml` into per-year files: `2024.yml`, `2023.yml`, ... `2016.yml`
- Each file keeps same structure (array of `{when, entries}` objects)
- Delete original `history.yml` after migration

### Phase 2: Data Loading Updates
- Update `history.ts` to handle loading from multiple files
- Add helper to discover available year files
- Add helper to load specific year's data
- Add helper to get entry counts per year (for navigation display)

### Phase 3: Routing Changes
- Convert `history.astro` to show current year only
- Create `history/[year].astro` dynamic route for archive years
- Both pages use same `HistoryDisplay.astro` component

### Phase 4: Navigation Component
- Create `HistoryYearNav.astro` component
- Shows links to all years with entry counts: "2024 (47) | 2023 (52) | ..."
- Placed at top and bottom of history pages
- Current year highlighted, links to archives

### Phase 5: Month Anchors
- Add `id` attributes to month sections in `HistoryDisplay.astro`
- Format: `id="october"` (lowercase month name)
- Optionally add in-page month jump links

### Phase 6: Cleanup
- Remove `HistoryRange` from year archive pages (keep only on `/history`)
- Update any internal links that reference `/history`
- Test all routes and navigation

## File Changes Summary

**New files**:
- `src/data/history/2024.yml` (and 2023, 2022, ... 2016)
- `src/pages/history/[year].astro`
- `src/components/history/HistoryYearNav.astro`

**Modified files**:
- `src/pages/history.astro` - Load current year only, add nav
- `src/components/history/history.ts` - Multi-file loading
- `src/components/history/HistoryDisplay.astro` - Add month anchor IDs

**Deleted files**:
- `src/data/history.yml` (after migration)

## Open Items / Future Enhancements

- Tag filtering (filter by work_tags or topic_tags)
- Search across all history entries
- Sticky month header while scrolling
- RSS feed per year
