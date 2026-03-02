# Project-Specific Guidelines for GitHub Copilot

## Project Overview
- Primary language(s): TypeScript, JavaScript
- Framework(s): Next.js 16 (App Router), React 19
- Architecture pattern: Component-driven static marketing/community website

## Coding Standards

### Language & Framework Versions
- Next.js: `16.1.6`
- React / React DOM: `19.2.3`
- TypeScript: `^5.9.3`
- ESLint: `^9.39.2`
- Tailwind CSS: `^4.1.18`

### Code Style
- Naming conventions: `PascalCase` components, `camelCase` values/functions, `UPPER_SNAKE_CASE` exported constants
- File organization: route/layout files under `app/`, reusable sections under `app/components/`, shared constants/utilities under `app/lib/`
- Import/module structure: ESM imports with explicit relative paths
- Error handling pattern: keep UI behavior resilient with fallback values (e.g., env-backed links with defaults)
- Testing pattern observed: no tests currently configured

### Testing Conventions
- Test file naming: `*.test.ts(x)` or `*.spec.ts(x)` (recommended for future work)
- Test framework: none currently configured
- Coverage expectations: define team baseline before adding CI gates
- Mocking approach: use framework-native tools after test framework adoption

## Documentation Structure

This repository follows a structured documentation approach:

### docs/architecture/
High-level architecture overviews, system diagrams, and data flow documentation. Update when overall system design changes significantly.

### docs/adr/ (Architecture Decision Records)
Architecture Decision Records documenting significant architectural choices. Files are named `NNNN-short-title.md` (e.g., `0001-use-postgresql.md`). ADRs are immutable and append-only.

**Each ADR must include:**
- Status (proposed, accepted, deprecated, superseded)
- Context (problem, constraints, requirements)
- Options considered (alternatives with pros/cons)
- Decision (what was chosen and why)
- Consequences (trade-offs, implications)

### docs/context/
Exploratory research, planning session notes, and working documentation. Files named `YYYY-MM-DD-topic-name.md` with Summary, Options/Findings, and Open Questions sections.

### docs/TODO.md
Living project task tracker. Add major tasks as they arise, keep checkbox status current (`- [ ]` / `- [x]`), and mark completed tasks immediately as work finishes.

## Information Sources Priority

### 1. Primary: Documentation Lookup Tools
- Use available documentation lookup tools for framework/library decisions when available.

### 2. Secondary: First-Party Official Documentation
- `nextjs.org/docs`
- `react.dev`
- npm package docs / official GitHub repositories
- `learn.microsoft.com` for Microsoft technologies when applicable

### 3. Never Rely Solely on Training Data
- Verify current versions, breaking changes, and deprecations with first-party docs.

## Security Guidelines

### Critical Requirements
- Never commit secrets, credentials, API keys, or tokens
- Use environment variables for sensitive configuration
- Validate and sanitize user input
- Keep dependencies patched and audited

### Code Review Focus
- Input handling and rendering safety
- Dependency and supply-chain risks
- Error handling that avoids sensitive data leaks

## Build & Deployment
- Build command: `pnpm build`
- Test command: `# TODO: Add test framework and command`
- Development server: `pnpm dev`
- Production server: `pnpm start`

## Documentation Update Policy (Automatic, No Prompt)

For any non-trivial code change, update documentation in the same turn without asking for confirmation.

### Required behavior
- Perform a docs impact check after every code edit.
- Update impacted files under `docs/` (`docs/TODO.md`, context notes, ADRs, architecture docs) when needed.
- If no docs changes are needed, explicitly state why.

### Completion gate
- A task is incomplete until required documentation updates are applied.

## General Documentation Principles
- Keep files focused on one topic
- Use Markdown format for documentation
- Link related docs (context notes ↔ ADRs)
- Never commit secrets or sensitive PII

## Sub-Agent Delegation

Use specialized Copilot agents in `.github/agents/` where available:
- Research tasks → `@research-agent`
- Code quality review tasks → `@code-reviewer`
- Security tasks → `@security-specialist`
- Documentation tasks → `@documentation-specialist`

Optional stack-specific agents when installed:
- Frontend tasks → `@frontend-specialist`
- Backend tasks → `@backend-specialist`
- Data tasks → `@data-specialist`
- DevOps tasks → `@devops-specialist`
