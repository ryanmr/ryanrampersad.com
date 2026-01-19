# 002: GitHub History Reconstruction

## Goal

Create an LLM-powered workflow to reconstruct monthly work history entries from GitHub Enterprise activity data for late 2024 and all of 2025, matching the existing format and style in `src/data/history/*.yml`.

## Output Format

Each month should produce entries in this YAML structure:

```yaml
- when: 2025-01-25T00:00:00.000Z
  entries:
    - description: |
        - Main activity description
            - Supporting detail
            - Another detail
      work_tags:
        - Cargill 🌾
      topic_tags:
        - Category1
        - Category2
```

## Data Sources to Fetch from GitHub Enterprise

### 1. Pull Requests (Primary Source)
**Endpoint**: `GET /users/{username}/pulls` or search API
**Data to capture**:
- PR title and body
- Repository name (indicates project/domain)
- Created/merged dates
- Files changed (indicates technology)
- Labels (may indicate category)
- Review comments given/received

**Why**: PRs are the richest source of "what was accomplished" - they have context, scope, and narrative.

### 2. Commits
**Endpoint**: `GET /users/{username}/events` filtered to PushEvents
**Data to capture**:
- Commit messages
- Repository name
- Date
- Files touched (for tech inference)

**Why**: Fills gaps where PRs weren't used; shows incremental work.

### 3. Repositories
**Endpoint**: `GET /users/{username}/repos` or org repos
**Data to capture**:
- Repo names and descriptions
- Primary language
- Recent activity dates
- Topics/tags on repos

**Why**: Repo names often indicate domain (e.g., "vulnerability-dashboard", "okta-integration").

### 4. Issues
**Endpoint**: `GET /issues` with author filter
**Data to capture**:
- Issues created (indicates problems solved or features proposed)
- Issues commented on (indicates collaboration/support)
- Issue labels

**Why**: Shows enablement work, support given to other teams.

### 5. Reviews
**Endpoint**: `GET /users/{username}/received_events` or search
**Data to capture**:
- PRs reviewed for others
- Review comments

**Why**: Shows mentorship, collaboration, architecture oversight.

### 6. Issue Comments
**Endpoint**: Search API with `commenter:` filter
**Data to capture**:
- Issues commented on (not just created)
- Comment content/context

**Why**: Shows support work, helping other teams, enablement activities.

### 7. Releases Published
**Endpoint**: Repository releases API
**Data to capture**:
- Release tags and names
- Release notes/descriptions
- Release dates

**Why**: Indicates shipped milestones and versioned deliverables.

### 8. Repositories Created
**Endpoint**: `GET /users/{username}/repos?sort=created`
**Data to capture**:
- New repo names and descriptions
- Creation dates
- Primary language

**Why**: Indicates new projects, prototypes, or initiatives started.

### 9. Discussions
**Endpoint**: GraphQL search for discussions
**Data to capture**:
- Discussion titles and categories
- RFCs, proposals, Q&A participation

**Why**: Shows architectural thinking, community engagement, knowledge sharing.

### 10. Gists
**Endpoint**: `GET /users/{username}/gists`
**Data to capture**:
- Gist descriptions
- File names and types
- Creation dates

**Why**: Shows prototypes, shared snippets, quick documentation.

### 11. All Events Stream
**Endpoint**: `GET /users/{username}/events`
**Data to capture**:
- CreateEvent (branches, tags)
- ReleaseEvent
- GollumEvent (wiki edits)
- MemberEvent
- PublicEvent

**Why**: Catches miscellaneous activity not covered by specific endpoints.

## Processing Pipeline

### Step 1: Fetch Raw Data
Script fetches all activity for the target date range (2024-11 through 2025-12) and saves as JSON:
- `raw/pulls.json`
- `raw/commits.json`
- `raw/issues.json`
- `raw/issue-comments.json`
- `raw/reviews.json`
- `raw/releases.json`
- `raw/repos-created.json`
- `raw/discussions.json`
- `raw/gists.json`
- `raw/all-events.json`

### Step 2: Group by Month
Aggregate all activity into monthly buckets:
```
2024-11: [pr1, pr2, commit1, ...]
2024-12: [pr3, issue1, ...]
2025-01: [...]
```

### Step 3: Cluster by Project/Theme
Within each month, group related items:
- Same repository = same project
- Similar keywords in titles = same initiative
- Related file paths = same feature

### Step 4: LLM Summarization
For each month's clustered data, prompt an LLM to generate history entries.

## LLM Agent Instructions

### Context to Provide
```
You are helping reconstruct a professional work history log. Given GitHub activity
data for a month, produce YAML entries matching the existing style.

The author works at Cargill as a Principal Software Engineer focused on:
- Platform engineering and developer enablement
- Security tooling (SCA, SAST, vulnerability management)
- Cloud infrastructure (Kubernetes, Terraform, Vela CI/CD)
- Frontend development (React, TypeScript, MUI)
- Identity/auth (Okta, OIDC)
```

### Style Guidelines for the Agent

1. **Description format**:
   - Start with a verb: "Built", "Updated", "Contributed", "Helped", "Created"
   - Main bullet is the summary
   - Sub-bullets provide technical details or context
   - Use markdown sparingly (backticks for code/tools, links where relevant)

2. **Tone**:
   - First person implied but not stated ("Built X" not "I built X")
   - Professional but not dry
   - Occasional personality (emoji for vacation, celebrations)
   - Honest about scope (don't inflate small fixes)

3. **Grouping**:
   - Group related PRs/commits into single entries
   - One entry per distinct initiative or project
   - Typically 3-6 entries per month
   - Vacation/personal items are separate entries with `work_tags: [Personal]`

4. **Work Tags**:
   - `Cargill 🌾` - Primary employer work
   - `Personal` - Non-work activities
   - `Open Source` - OSS contributions

5. **Topic Tags** (common categories):
   - **Tech**: React, TypeScript, Go, Python, MUI, Vite, Next, Spring
   - **Domain**: Security, Enablement, Platform, Cloud, Okta, CVE
   - **Activity**: Prototype, Maintenance, Documentation, Testing, Production
   - **Meta**: Vacation, Conference, Hackathon, Strategy

### Example Prompt for Agent

```
Here is GitHub activity for January 2025:

PULL REQUESTS:
- [repo: vulnerability-dashboard] "Add severity filtering to CVE table" (merged 2025-01-08)
  Files: src/components/CveTable.tsx, src/hooks/useFilters.ts
- [repo: vulnerability-dashboard] "Upgrade to React 19" (merged 2025-01-15)
- [repo: vela-plugins] "Add timeout parameter to deploy plugin" (merged 2025-01-20)

COMMITS:
- [repo: internal-docs] "Update onboarding guide for 2025" (2025-01-05)

ISSUES CREATED:
- [repo: platform-api] "Consider adding rate limiting to /metrics endpoint"

---

Based on this activity, generate 2-4 YAML history entries for January 2025.
Follow the established format with description, work_tags, and topic_tags.
Group related items. Infer appropriate topic_tags from the repositories and file types.
```

### Expected Output from Agent

```yaml
- when: 2025-01-25T00:00:00.000Z
  entries:
    - description: |
        - Enhanced the vulnerability dashboard with severity filtering
            - Added filter controls to the CVE table component
            - Created reusable filter hooks for future use
        - Upgraded the dashboard to React 19
      work_tags:
        - Cargill 🌾
      topic_tags:
        - React
        - TypeScript
        - Security
        - CVE
    - description: |
        - Contributed improvements to internal Vela plugins
            - Added configurable timeout parameter to the deploy plugin
      work_tags:
        - Cargill 🌾
      topic_tags:
        - Vela
        - Enablement
    - description: |
        - Updated onboarding documentation for the new year
      work_tags:
        - Cargill 🌾
      topic_tags:
        - Documentation
```

## Inference Heuristics

### Repository Name → Domain
| Pattern | Likely Domain |
|---------|---------------|
| `*-ui`, `*-dashboard`, `*-frontend` | React, TypeScript, MUI |
| `*-api`, `*-service` | Go, Platform, Cloud |
| `*-plugin`, `vela-*` | Vela, Enablement |
| `*-docs`, `*-documentation` | Documentation |
| `okta-*`, `*-auth`, `*-identity` | Okta, Security |
| `*-terraform`, `*-infra` | Cloud, Terraform |

### File Extensions → Technology
| Extension | Technology |
|-----------|------------|
| `.tsx`, `.jsx` | React, TypeScript |
| `.go` | Go |
| `.py` | Python |
| `.yml`, `.yaml` | Pipeline, Config |
| `.tf` | Terraform |
| `.md` | Documentation |

### Keywords → Topic Tags
| Keywords in PR/Commit | Suggested Tags |
|-----------------------|----------------|
| CVE, vulnerability, security, scan | Security, CVE |
| upgrade, update, dependency | Maintenance |
| prototype, POC, experiment | Prototype |
| fix, bug, hotfix | Maintenance |
| docs, documentation, guide | Documentation |
| test, coverage, jest, vitest | Testing |
| deploy, release, production | Production |
| okta, auth, login, OIDC | Okta, Security |

## Script Outputs

The data-fetching script should produce:

1. **`raw/{year}-{month}-activity.json`** - Raw GitHub API responses
2. **`processed/{year}-{month}-summary.md`** - Human-readable summary for review
3. **`drafts/{year}.yml`** - LLM-generated draft entries for the year

## Human Review Process

1. LLM generates draft entries
2. Human reviews for:
   - Accuracy (did this actually happen?)
   - Completeness (missing major work?)
   - Tone (matches existing style?)
   - Confidentiality (no sensitive details exposed?)
3. Human edits and approves
4. Final entries merged into `src/data/history/{year}.yml`

## Notes

- GitHub Enterprise API may have different endpoints than github.com
- Rate limiting: batch requests, add delays
- Private repos: ensure token has appropriate scopes
- Some work may not be in GitHub (meetings, planning, verbal contributions) - human should supplement
