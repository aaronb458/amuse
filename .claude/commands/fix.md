---
name: fix
description: Run typechecking and linting, then spawn parallel agents to fix all issues
---

# Project Code Quality Check

This command runs all linting and typechecking tools for this project, collects errors, groups them by domain, and spawns parallel agents to fix them.

## Step 1: Run Linting and Typechecking

Run the appropriate commands for this project:

```bash
npm run type-check
npm run lint
```

## Step 2: Collect and Parse Errors

Parse the output from the linting and typechecking commands. Group errors by domain:

- **Type errors**: Issues from TypeScript (tsc)
- **Lint errors**: Issues from eslint
- **Format errors**: Issues from prettier (if any)

Create a list of all files with issues and the specific problems in each file.

## Step 3: Spawn Parallel Agents

For each domain that has issues, spawn an agent in parallel using the Task tool:

**IMPORTANT**: Use a SINGLE response with MULTIPLE Task tool calls to run agents in parallel.

Example:

- Spawn a "type-fixer" agent for type errors with the prompt: "Fix all TypeScript type errors in the following files: [list of files and errors]. Run `npm run type-check` after fixing to verify all issues are resolved."
- Spawn a "lint-fixer" agent for lint errors with the prompt: "Fix all ESLint errors in the following files: [list of files and errors]. Run `npm run lint` after fixing to verify all issues are resolved."
- Spawn a "format-fixer" agent for formatting errors with the prompt: "Fix all formatting issues in the following files: [list of files]. Run `npm run format` to auto-fix formatting."

Each agent should:

1. Receive the list of files and specific errors in their domain
2. Fix all errors in their domain
3. Run the relevant check command to verify fixes
4. Report completion

## Step 4: Verify All Fixes

After all agents complete, run the full check again to ensure all issues are resolved:

```bash
npm run type-check
npm run lint
```

If all checks pass, report success. If any issues remain, identify them and either fix them directly or inform the user.
