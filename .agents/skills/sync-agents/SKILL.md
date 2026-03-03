<!--
# AUTO-SYNCED from .github/skills/sync-agents/SKILL.md — do not edit directly
# Source of truth: .github/skills/ | Re-sync: /sync-agents
-->

---
name: sync-agents
description: 'Synchronize GitHub Copilot instructions, custom agents, and skills into detected AI coding agent configurations in this repository. Use when asked to mirror .github/copilot-instructions.md, .github/instructions, .github/agents, or .github/skills into Claude, Codex, Cursor, Gemini, Windsurf, and related tooling.'
---

# Sync Agent Instructions, Agents, and Skills

Mirror all GitHub Copilot customizations — instructions, custom agents, and agent skills —
into every detected AI coding agent configuration found in this repository.

This skill supports **12 agent ecosystems**. Rather than creating files for every
agent unconditionally, it **detects which agents are already configured** in the repo and
syncs only those.

**Source locations (Copilot / source of truth):**

- `.github/copilot-instructions.md` — global instructions
- `.github/instructions/*.instructions.md` — path-scoped instructions
- `.github/agents/*.agent.md` — custom agent profiles
- `.github/skills/<name>/SKILL.md` — agent skills (open standard)

## Your Task

Execute the following steps **in order**, creating or overwriting files as needed.
Never delete `.github/copilot-instructions.md` or anything inside `.github/`.

---

### Step 1 — Read the source of truth

Read `.github/copilot-instructions.md` and store its full content.

If the file does not exist, stop and tell the user:

> "No `.github/copilot-instructions.md` found. Please create this file first — it is the source of truth for all AI agent instructions."

Also scan and store the contents of:

- **`.github/instructions/`** — any `*.instructions.md` files. For each, record the filename, `applyTo` frontmatter glob (if present), and body content.
- **`.github/agents/`** — any `*.agent.md` files. For each, record the full filename, the complete YAML frontmatter block (`name`, `description`, `model`, `tools`, `handoffs`, etc.), and the body prompt.
- **`.github/skills/`** — any subdirectory containing a `SKILL.md` file. For each skill, record the directory name, the complete `SKILL.md` frontmatter (`name`, `description`, `user-invokable`, `disable-model-invocation`, etc.), the body content, and note any additional bundled asset files (scripts, examples, references) present in that directory.
