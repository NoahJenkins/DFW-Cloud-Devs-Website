# Project Task Tracker

Last Updated: 2026-03-02

> Living document for major project tasks. Update status continuously during planning and implementation.

## Onboarding
- [x] Run repository analysis and detect tech stack
- [x] Establish docs structure (`docs/architecture/`, `docs/adr/`, `docs/context/`)
- [x] Create initial ADR (`docs/adr/0001-adopt-documentation-structure.md`)
- [x] Generate onboarding summary report

## Architecture & Documentation
- [x] Add/update architecture documentation
- [x] Add context/research notes and update `docs/context/index.md`
- [x] Record new architectural decisions as ADRs

## Security & Quality
- [x] Run dependency/security audit
- [x] Review secret handling and `.gitignore` coverage
- [ ] Address critical/high findings
- [ ] Execute dependency remediation plan (`docs/context/2026-03-02-dependency-remediation-plan.md`)
- [ ] Add Dependabot or Renovate for automated security updates
- [ ] Add CI audit gate for dependency vulnerabilities

## Blocked
- [ ] # TODO: Decide whether to standardize on pnpm-only lockfile strategy (`package-lock.json` vs `pnpm-lock.yaml`)

## Follow-ups
- [ ] # TODO: Assign owner for dependency remediation phases and target completion date
- [ ] # TODO: Add team-specific onboarding tasks
- [ ] # TODO: Assign owners and due dates for open items

## Definition of Done
- [x] Acceptance criteria are met
- [x] Relevant docs are updated (`README`, ADRs, context notes, or architecture docs as applicable)
- [x] Security/quality checks for the change are completed
- [x] Any follow-up work is captured as new TODO items
