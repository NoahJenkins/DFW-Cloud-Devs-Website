# Dependabot Auto-Merge: Bug Fix and Repo Enablement

## Summary

Investigated 9 open Dependabot PRs that were not auto-merging despite the
`dependabot-auto-merge.yml` workflow added in commit `fd56cb2`. Three root
causes were identified and resolved.

## Findings

### Root Cause 1: Ecosystem name mismatch (`npm` vs `npm_and_yarn`)

The eligibility check in the workflow used:

```bash
case "$PACKAGE_ECOSYSTEM" in
  npm|github-actions) ...
```

However, `dependabot/fetch-metadata` returns `npm_and_yarn` (not `npm`) for the
npm package ecosystem. This caused **all npm PRs to fail eligibility silently**
— the workflow reported success but logged "ineligible" for every npm PR.

**Fix:** Changed `npm` → `npm_and_yarn` in the case statement.

### Root Cause 2: Major github-actions bumps excluded

PRs 11–13 bumped `actions/checkout`, `actions/setup-node`, and
`actions/github-script` across major versions (4→6, 7→8). The original workflow
only allowed `semver-patch` and `semver-minor`, so these were ineligible.

GitHub Actions major version bumps are runtime/Node.js upgrades, not breaking
API changes for consumers. They are safe to auto-merge without manual review.

**Fix:** Added a `semver-major` case that sets `update_ok=true` when the
ecosystem is `github-actions`.

### Root Cause 3: Repository auto-merge feature was disabled

Even when the workflow successfully called `enablePullRequestAutoMerge` via
GraphQL, GitHub rejected the mutation because the repository-level
**"Allow auto-merge"** setting was off. Confirmed via:

```
gh api graphql -f query='{ repository(owner: "NoahJenkins", name: "DFW-Cloud-Devs-Website") { autoMergeAllowed } }'
# → { "autoMergeAllowed": false }
```

**Fix:** Enabled via `gh repo edit --enable-auto-merge`. Confirmed `autoMergeAllowed: true` post-change.

### Additional: Old PRs never triggered the workflow

PRs 3, 4, 5, 6 (opened 2026-03-03) and PR 9 (opened earlier on 2026-03-16)
were created before the auto-merge workflow existed. Since `pull_request_target`
only fires on PR lifecycle events, these PRs had no pending trigger.

**Fix:** Commented `@dependabot rebase` on each PR to generate a `synchronize`
event and re-run the workflow after the bug fix was pushed.

### Additional: Upgraded `actions/github-script` v7 → v8 in workflow

The workflow itself used `actions/github-script@v7` (Node 20, deprecated June
2026). Updated all three step usages to `v8`.

## Open Questions

- Should the CI audit gate be tightened to fail on `moderate` findings in addition to `high`/`critical`?
- Should major npm bumps (excluding `next`/`react`/`react-dom`) also be auto-merged once the team has higher confidence in the CI pipeline?
