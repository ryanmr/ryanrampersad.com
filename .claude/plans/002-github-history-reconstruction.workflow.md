# GitHub History Reconstruction Workflow

## Prerequisites

1. GitHub Enterprise personal access token with scopes: `repo`, `read:user`, `read:org`
2. Access to target organizations/repositories
3. Date range: 2024-11-01 through current date

## Phase 1: Data Collection

### Step 1.1: Fetch Pull Requests

```bash
# Fetch all PRs authored by user in date range
gh api graphql --paginate -f query='
  query($cursor: String) {
    search(query: "author:USERNAME created:2024-11-01..2025-12-31 type:pr", type: ISSUE, first: 100, after: $cursor) {
      pageInfo { hasNextPage endCursor }
      nodes {
        ... on PullRequest {
          title
          body
          url
          createdAt
          mergedAt
          repository { name nameWithOwner }
          files(first: 50) { nodes { path } }
          labels(first: 10) { nodes { name } }
        }
      }
    }
  }
' > raw/pulls.json
```

### Step 1.2: Fetch Commits

```bash
# Fetch push events (commits) for user
gh api "/users/USERNAME/events" --paginate | \
  jq '[.[] | select(.type == "PushEvent") | select(.created_at >= "2024-11-01")]' \
  > raw/commits.json
```

### Step 1.3: Fetch Issues Created

```bash
gh api graphql --paginate -f query='
  query($cursor: String) {
    search(query: "author:USERNAME created:2024-11-01..2025-12-31 type:issue", type: ISSUE, first: 100, after: $cursor) {
      pageInfo { hasNextPage endCursor }
      nodes {
        ... on Issue {
          title
          body
          url
          createdAt
          repository { name nameWithOwner }
          labels(first: 10) { nodes { name } }
        }
      }
    }
  }
' > raw/issues.json
```

### Step 1.4: Fetch Reviews Given

```bash
gh api graphql --paginate -f query='
  query($cursor: String) {
    search(query: "reviewed-by:USERNAME created:2024-11-01..2025-12-31 type:pr", type: ISSUE, first: 100, after: $cursor) {
      pageInfo { hasNextPage endCursor }
      nodes {
        ... on PullRequest {
          title
          url
          createdAt
          repository { name }
        }
      }
    }
  }
' > raw/reviews.json
```

### Step 1.5: Fetch Issue Comments

```bash
# Comments on issues (shows support/collaboration work)
gh api graphql --paginate -f query='
  query($cursor: String) {
    search(query: "commenter:USERNAME created:2024-11-01..2025-12-31 type:issue", type: ISSUE, first: 100, after: $cursor) {
      pageInfo { hasNextPage endCursor }
      nodes {
        ... on Issue {
          title
          url
          createdAt
          repository { name nameWithOwner }
        }
      }
    }
  }
' > raw/issue-comments.json
```

### Step 1.6: Fetch All User Events

```bash
# Comprehensive event stream - catches everything else
# Includes: CreateEvent (repos, branches, tags), ReleaseEvent,
# PublicEvent, MemberEvent, GollumEvent (wiki), etc.
gh api "/users/USERNAME/events" --paginate | \
  jq '[.[] | select(.created_at >= "2024-11-01")]' \
  > raw/all-events.json
```

### Step 1.7: Fetch Releases Published

```bash
# Releases indicate shipped milestones
gh api graphql --paginate -f query='
  query($cursor: String) {
    search(query: "author:USERNAME created:2024-11-01..2025-12-31", type: REPOSITORY, first: 100, after: $cursor) {
      nodes {
        ... on Repository {
          name
          releases(first: 20, orderBy: {field: CREATED_AT, direction: DESC}) {
            nodes {
              name
              tagName
              createdAt
              description
            }
          }
        }
      }
    }
  }
' > raw/releases.json
```

### Step 1.8: Fetch Repositories Created

```bash
# New repos indicate new projects/initiatives
gh api "/users/USERNAME/repos?sort=created&per_page=100" | \
  jq '[.[] | select(.created_at >= "2024-11-01T00:00:00Z")]' \
  > raw/repos-created.json
```

### Step 1.9: Fetch Discussions (if enabled)

```bash
# Discussions participation (if org uses them)
gh api graphql --paginate -f query='
  query($cursor: String) {
    search(query: "author:USERNAME created:2024-11-01..2025-12-31 type:discussion", type: DISCUSSION, first: 100, after: $cursor) {
      pageInfo { hasNextPage endCursor }
      nodes {
        ... on Discussion {
          title
          url
          createdAt
          repository { name }
          category { name }
        }
      }
    }
  }
' > raw/discussions.json 2>/dev/null || echo "[]" > raw/discussions.json
```

### Step 1.10: Fetch Gists (if used)

```bash
# Gists can indicate prototypes, snippets shared, documentation
gh api "/users/USERNAME/gists" --paginate | \
  jq '[.[] | select(.created_at >= "2024-11-01T00:00:00Z")]' \
  > raw/gists.json
```

---

## Phase 2: Data Processing

### Step 2.1: Group by Month

Create monthly summaries combining all data sources:

```
processed/
  2024-11-summary.json
  2024-12-summary.json
  2025-01-summary.json
  ...
```

Each file contains:
```json
{
  "month": "2025-01",
  "pullRequests": [...],
  "commits": [...],
  "issuesCreated": [...],
  "issueComments": [...],
  "reviewsGiven": [...],
  "releasesPublished": [...],
  "repositoriesCreated": [...],
  "discussions": [...],
  "gists": [...],
  "otherEvents": [...]
}
```

### Step 2.2: Generate Human-Readable Summary

For each month, create a markdown summary for review:

```markdown
# January 2025 Activity

## Pull Requests (5)
- [vulnerability-dashboard] Add severity filtering (merged 01-08)
- [vulnerability-dashboard] Upgrade to React 19 (merged 01-15)
...

## Commits (12)
- [internal-docs] Update onboarding guide (01-05)
...

## Issues Created (2)
- [platform-api] Consider adding rate limiting
...

## Issue Comments (15)
- [team-repo#123] Provided guidance on auth implementation
- [platform-api#456] Answered question about deployment
...

## Reviews Given (8)
- [team-repo] Reviewed "Add caching layer"
...

## Releases Published (1)
- [cloudflare-cache-tool] v1.2.0 - Added timeout support
...

## Repositories Created (1)
- [new-prototype] Experimental dashboard for X
...

## Discussions (3)
- [platform-docs] RFC: New deployment strategy
...

## Gists (2)
- "Quick script for parsing logs"
...

## Other Events
- Created branch `feature/new-thing` in [repo]
- Wiki edit in [docs-repo]
...
```

---

## Phase 3: LLM Generation

### Step 3.1: Prepare Prompt

For each month, construct this prompt:

```
You are reconstructing a professional work history entry for Ryan Rampersad.

CONTEXT:
- Works at Cargill as Principal Software Engineer
- Focus areas: platform engineering, developer enablement, security tooling, cloud infrastructure
- Style: First-person implied, verb-first descriptions, technical but accessible

EXISTING STYLE EXAMPLE:
- when: 2024-10-25
  entries:
    - description: |
        - Built a prototype for rudimentary alternative to data warehouse style reporting
            - Hypothesized that "sql-as-the-interface" was critical for reporting purposes
            - Explored an alternative method: adhoc creation of SQLite databases
      work_tags:
        - Cargill 🌾
      topic_tags:
        - Prototype
        - SQL
        - AI

ACTIVITY DATA FOR [MONTH YEAR]:
[Insert monthly summary here]

INSTRUCTIONS:
1. Group related PRs/commits into single entries (typically 3-6 entries per month)
2. Start descriptions with action verbs: Built, Created, Updated, Contributed, Helped, etc.
3. Add sub-bullets for technical details
4. Assign work_tags (usually "Cargill 🌾", or "Personal" for non-work)
5. Assign topic_tags from: React, TypeScript, Go, Python, Security, Enablement, Platform, Cloud, Okta, CVE, Maintenance, Documentation, Testing, Production, Prototype, Vela, etc.
6. Use date format: YYYY-MM-DD (always 25th of month)
7. Output valid YAML only, no explanation

Generate the YAML entries:
```

### Step 3.2: Validate Output

Check generated YAML:
- Valid YAML syntax
- Correct date format
- Has work_tags and topic_tags arrays
- Descriptions start with `-` and verb

### Step 3.3: Save Draft

Save to `drafts/YYYY.yml` for human review.

---

## Phase 4: Human Review Checklist

For each generated month:

- [ ] **Accuracy**: Does this reflect what actually happened?
- [ ] **Completeness**: Any major work missing? (Add manually if needed)
- [ ] **Confidentiality**: No sensitive project names, client details, or internal URLs?
- [ ] **Tone**: Matches existing history entries?
- [ ] **Tags**: Appropriate topic_tags assigned?
- [ ] **Non-GitHub work**: Add meetings, planning, verbal contributions manually

---

## Phase 5: Finalize

Ryan will review any generated content.

---

## Quick Reference: Topic Tags

| Category | Tags |
|----------|------|
| Frontend | React, TypeScript, MUI, Vite, Next, Astro |
| Backend | Go, Python, Spring, Node, Hono |
| Platform | Vela, Cloud, Kubernetes, Terraform, nginx |
| Security | Security, CVE, Okta, Secrets, SAST, SCA |
| Activity | Enablement, Maintenance, Documentation, Testing, Production, Prototype |
| Meta | Vacation, Conference, Hackathon, Strategy, Open Source |

## Quick Reference: Work Tags

| Tag | Use For |
|-----|---------|
| `Cargill 🌾` | All employer work |
| `Personal` | Vacation, personal projects |
| `Open Source` | OSS contributions outside work |

---

## Troubleshooting

**GitHub Enterprise vs github.com**: Replace `gh api` with appropriate GHE hostname:
```bash
gh api --hostname github.example.com ...
```

**Rate Limiting**: Add delays between requests:
```bash
sleep 1
```

**Missing Activity**: Some work won't be in GitHub:
- Architecture discussions
- Meetings and planning sessions
- Verbal mentorship
- Slack/Teams support

Add these manually during human review phase.
