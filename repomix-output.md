This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where comments have been removed, empty lines have been removed.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Code comments have been removed from supported file types
- Empty lines have been removed from all files
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.dockerignore
.github/skills/monitor-ci/scripts/ci-poll-decide.mjs
.github/skills/monitor-ci/scripts/ci-state-update.mjs
.github/workflows/ci.yml
.gitignore
.prettierignore
.prettierrc
.repomixignore
backend/.gitignore
backend/docker-entrypoint.sh
backend/Dockerfile
backend/eslint.config.mjs
backend/jest.config.cts
backend/package.json
backend/prisma.config.ts
backend/prisma/migrations/20260515144008_init_user/migration.sql
backend/prisma/migrations/20260517120553_init/migration.sql
backend/prisma/migrations/20260524101928_add_unique_email/migration.sql
backend/prisma/migrations/20260524103145_partial_unique_index/migration.sql
backend/prisma/migrations/20260525132600_role_unique_name/migration.sql
backend/prisma/migrations/20260525133916_drop_unique_key_and_crete_role_unique_name/migration.sql
backend/prisma/migrations/20260601164737_unique_email_user/migration.sql
backend/prisma/migrations/migration_lock.toml
backend/prisma/schema.prisma
backend/project.json
backend/src/app/app.controller.spec.ts
backend/src/app/app.controller.ts
backend/src/app/app.module.ts
backend/src/app/app.service.spec.ts
backend/src/app/app.service.ts
backend/src/assets/.gitkeep
backend/src/emails/aws-verify-email.tsx
backend/src/initialScript/create-permisson.ts
backend/src/initialScript/index.ts
backend/src/main.ts
backend/src/routes/auth/auth.controller.ts
backend/src/routes/auth/auth.dto.ts
backend/src/routes/auth/auth.model.ts
backend/src/routes/auth/auth.module.ts
backend/src/routes/auth/auth.repo.ts
backend/src/routes/auth/auth.service.ts
backend/src/routes/auth/error.model.ts
backend/src/routes/language/error.model.ts
backend/src/routes/language/language.controller.ts
backend/src/routes/language/language.dto.ts
backend/src/routes/language/language.model.ts
backend/src/routes/language/language.module.ts
backend/src/routes/language/language.repo.ts
backend/src/routes/language/language.service.ts
backend/src/routes/media/media.controller.ts
backend/src/routes/media/media.module.ts
backend/src/routes/permission/permission.controller.ts
backend/src/routes/permission/permission.dto.ts
backend/src/routes/permission/permission.error.ts
backend/src/routes/permission/permission.model.ts
backend/src/routes/permission/permission.module.ts
backend/src/routes/permission/permission.repo.ts
backend/src/routes/permission/permission.service.ts
backend/src/routes/profile/profile.controller.ts
backend/src/routes/profile/profile.dto.ts
backend/src/routes/profile/profile.error.ts
backend/src/routes/profile/profile.model.ts
backend/src/routes/profile/profile.module.ts
backend/src/routes/profile/profile.service.ts
backend/src/routes/role/role.controller.ts
backend/src/routes/role/role.dto.ts
backend/src/routes/role/role.error.ts
backend/src/routes/role/role.model.ts
backend/src/routes/role/role.module.ts
backend/src/routes/role/role.repo.ts
backend/src/routes/role/roles.service.ts
backend/src/routes/user/user.controller.ts
backend/src/routes/user/user.dto.ts
backend/src/routes/user/user.error.ts
backend/src/routes/user/user.model.ts
backend/src/routes/user/user.module.ts
backend/src/routes/user/user.repo.ts
backend/src/routes/user/user.service.ts
backend/src/shared/config/validate.ts
backend/src/shared/constants/auth.constant.ts
backend/src/shared/constants/role.constant.ts
backend/src/shared/decorators/active-role-permission.decorator.ts
backend/src/shared/decorators/active-user.decorator.ts
backend/src/shared/decorators/auth.decorator.ts
backend/src/shared/decorators/user-agent.decorator.ts
backend/src/shared/dtos/auth.dto.ts
backend/src/shared/dtos/response.dto.ts
backend/src/shared/error/error.ts
backend/src/shared/filters/http-exception.filter.ts
backend/src/shared/guards/access-token.guard.ts
backend/src/shared/guards/api-key.guard.ts
backend/src/shared/guards/authentication.guard.ts
backend/src/shared/helper/error.ts
backend/src/shared/helper/generate-otp.ts
backend/src/shared/helper/randome-name-file.ts
backend/src/shared/models/entity.model.ts
backend/src/shared/models/request.model.ts
backend/src/shared/models/response.model.ts
backend/src/shared/pipes/custom-zod-validation.pipes.ts
backend/src/shared/repositories/shared-role.repo.ts
backend/src/shared/repositories/shared-user.repo.ts
backend/src/shared/services/2fa.service.ts
backend/src/shared/services/email.service.ts
backend/src/shared/services/hashing.service.ts
backend/src/shared/services/prisma.service.ts
backend/src/shared/services/token.service.ts
backend/src/shared/shared.module.ts
backend/src/shared/types/jwt.type.ts
backend/tsconfig.app.json
backend/tsconfig.json
backend/tsconfig.spec.json
backend/webpack.config.js
docker-compose.yml
eslint.config.mjs
jest.config.ts
jest.preset.js
nx.json
opencode.json
package.json
packages/.gitkeep
pnpm-workspace.yaml
tsconfig.base.json
tsconfig.json
```

# Files

## File: .repomixignore
```
.agents
.claude
.codex
.cursor
.gemini
.opencode
backend-e2e
frontend-e2e
frontend
*.md
```

## File: .dockerignore
```
node_modules
dist
.nx
.git
frontend-e2e
backend-e2e
**/.env
coverage
```

## File: .github/skills/monitor-ci/scripts/ci-poll-decide.mjs
```javascript
#!/usr/bin/env node

/**
 * CI Poll Decision Script
 *
 * Deterministic decision engine for CI monitoring.
 * Takes ci_information JSON + state args, outputs a single JSON action line.
 *
 * Architecture:
 *   classify()    — pure decision tree, returns { action, code, extra? }
 *   buildOutput() — maps classification to full output with messages, delays, counters
 *
 * Usage:
 *   node ci-poll-decide.mjs '<ci_info_json>' <poll_count> <verbosity> \
 *     [--wait-mode] [--prev-cipe-url <url>] [--expected-sha <sha>] \
 *     [--prev-status <status>] [--timeout <seconds>] [--new-cipe-timeout <seconds>] \
 *     [--env-rerun-count <n>] [--no-progress-count <n>] \
 *     [--prev-cipe-status <status>] [--prev-sh-status <status>] \
 *     [--prev-verification-status <status>] [--prev-failure-classification <status>]
 */

// --- Arg parsing ---

const args = process.argv.slice(2);
const ciInfoJson = args[0];
const pollCount = parseInt(args[1], 10) || 0;
const verbosity = args[2] || 'medium';

function getFlag(name) {
  return args.includes(name);
}

function getArg(name) {
  const idx = args.indexOf(name);
  return idx !== -1 && idx + 1 < args.length ? args[idx + 1] : null;
}

const waitMode = getFlag('--wait-mode');
const prevCipeUrl = getArg('--prev-cipe-url');
const expectedSha = getArg('--expected-sha');
const prevStatus = getArg('--prev-status');
const timeoutSeconds = parseInt(getArg('--timeout') || '0', 10);
const newCipeTimeoutSeconds = parseInt(getArg('--new-cipe-timeout') || '0', 10);
const envRerunCount = parseInt(getArg('--env-rerun-count') || '0', 10);
const inputNoProgressCount = parseInt(getArg('--no-progress-count') || '0', 10);
const prevCipeStatus = getArg('--prev-cipe-status');
const prevShStatus = getArg('--prev-sh-status');
const prevVerificationStatus = getArg('--prev-verification-status');
const prevFailureClassification = getArg('--prev-failure-classification');

// --- Parse CI info ---

let ci;
try {
  ci = JSON.parse(ciInfoJson);
} catch {
  console.log(
    JSON.stringify({
      action: 'done',
      code: 'error',
      message: 'Failed to parse ci_information JSON',
      noProgressCount: inputNoProgressCount + 1,
      envRerunCount,
    })
  );
  process.exit(0);
}

const {
  cipeStatus,
  selfHealingStatus,
  verificationStatus,
  selfHealingEnabled,
  selfHealingSkippedReason,
  failureClassification: rawFailureClassification,
  failedTaskIds = [],
  verifiedTaskIds = [],
  couldAutoApplyTasks,
  autoApplySkipped,
  autoApplySkipReason,
  userAction,
  cipeUrl,
  commitSha,
} = ci;

const failureClassification = rawFailureClassification?.toLowerCase() ?? null;

// --- Helpers ---

function categorizeTasks() {
  const verifiedSet = new Set(verifiedTaskIds);
  const unverified = failedTaskIds.filter((t) => !verifiedSet.has(t));
  if (unverified.length === 0) return { category: 'all_verified' };

  const e2e = unverified.filter((t) => {
    const parts = t.split(':');
    return parts.length >= 2 && parts[1].includes('e2e');
  });
  if (e2e.length === unverified.length) return { category: 'e2e_only' };

  const verifiable = unverified.filter((t) => {
    const parts = t.split(':');
    return !(parts.length >= 2 && parts[1].includes('e2e'));
  });
  return { category: 'needs_local_verify', verifiableTaskIds: verifiable };
}

function backoff(count) {
  const delays = [60, 90, 120];
  return delays[Math.min(count, delays.length - 1)];
}

function hasStateChanged() {
  if (prevCipeStatus && cipeStatus !== prevCipeStatus) return true;
  if (prevShStatus && selfHealingStatus !== prevShStatus) return true;
  if (prevVerificationStatus && verificationStatus !== prevVerificationStatus)
    return true;
  if (
    prevFailureClassification &&
    failureClassification !== prevFailureClassification
  )
    return true;
  return false;
}

function isTimedOut() {
  if (timeoutSeconds <= 0) return false;
  const avgDelay = pollCount === 0 ? 0 : backoff(Math.floor(pollCount / 2));
  return pollCount * avgDelay >= timeoutSeconds;
}

function isWaitTimedOut() {
  if (newCipeTimeoutSeconds <= 0) return false;
  return pollCount * 30 >= newCipeTimeoutSeconds;
}

function isNewCipe() {
  return (
    (prevCipeUrl && cipeUrl && cipeUrl !== prevCipeUrl) ||
    (expectedSha && commitSha && commitSha === expectedSha)
  );
}

// ============================================================
// classify() — pure decision tree
//
// Returns: { action: 'poll'|'wait'|'done', code: string, extra? }
//
// Decision priority (top wins):
//   WAIT MODE:
//     1. new CI Attempt detected         → poll  (new_cipe_detected)
//     2. wait timed out                  → done  (no_new_cipe)
//     3. still waiting                   → wait  (waiting_for_cipe)
//   NORMAL MODE:
//     4. polling timeout                 → done  (polling_timeout)
//     5. circuit breaker (5 polls)       → done  (circuit_breaker)
//     6. CI succeeded                    → done  (ci_success)
//     7. CI canceled                     → done  (cipe_canceled)
//     8. CI timed out                    → done  (cipe_timed_out)
//     9. CI failed, no tasks recorded    → done  (cipe_no_tasks)
//    10. environment failure             → done  (environment_rerun_cap | environment_issue)
//    11. self-healing throttled          → done  (self_healing_throttled)
//    12. CI in progress / not started    → poll  (ci_running)
//    13. self-healing in progress        → poll  (sh_running)
//    14. flaky task auto-rerun           → poll  (flaky_rerun)
//    15. fix auto-applied                → poll  (fix_auto_applied)
//    16. auto-apply: skipped             → done  (fix_auto_apply_skipped)
//    17. auto-apply: verification pending→ poll  (verification_pending)
//    18. auto-apply: verified            → done  (fix_auto_applying)
//    19. fix: verification failed/none   → done  (fix_needs_review)
//    20. fix: all/e2e verified           → done  (fix_apply_ready)
//    21. fix: needs local verify         → done  (fix_needs_local_verify)
//    22. self-healing failed             → done  (fix_failed)
//    23. no fix available                → done  (no_fix)
//    24. fallback                        → poll  (fallback)
// ============================================================

function classify() {
  // --- Wait mode ---
  if (waitMode) {
    if (isNewCipe()) return { action: 'poll', code: 'new_cipe_detected' };
    if (isWaitTimedOut()) return { action: 'done', code: 'no_new_cipe' };
    return { action: 'wait', code: 'waiting_for_cipe' };
  }

  // --- Guards ---
  if (isTimedOut()) return { action: 'done', code: 'polling_timeout' };
  if (noProgressCount >= 5) return { action: 'done', code: 'circuit_breaker' };

  // --- Terminal CI states ---
  if (cipeStatus === 'SUCCEEDED') return { action: 'done', code: 'ci_success' };
  if (cipeStatus === 'CANCELED')
    return { action: 'done', code: 'cipe_canceled' };
  if (cipeStatus === 'TIMED_OUT')
    return { action: 'done', code: 'cipe_timed_out' };

  // --- CI failed, no tasks ---
  if (
    cipeStatus === 'FAILED' &&
    failedTaskIds.length === 0 &&
    selfHealingStatus == null
  )
    return { action: 'done', code: 'cipe_no_tasks' };

  // --- Environment failure ---
  if (failureClassification === 'environment_state') {
    if (envRerunCount >= 2)
      return { action: 'done', code: 'environment_rerun_cap' };
    return { action: 'done', code: 'environment_issue' };
  }

  // --- Throttled ---
  if (selfHealingSkippedReason === 'THROTTLED')
    return { action: 'done', code: 'self_healing_throttled' };

  // --- Still running: CI ---
  if (cipeStatus === 'IN_PROGRESS' || cipeStatus === 'NOT_STARTED')
    return { action: 'poll', code: 'ci_running' };

  // --- Still running: self-healing ---
  if (
    (selfHealingStatus === 'IN_PROGRESS' ||
      selfHealingStatus === 'NOT_STARTED') &&
    !selfHealingSkippedReason
  )
    return { action: 'poll', code: 'sh_running' };

  // --- Still running: flaky rerun ---
  if (failureClassification === 'flaky_task')
    return { action: 'poll', code: 'flaky_rerun' };

  // --- Fix auto-applied, waiting for new CI Attempt ---
  if (userAction === 'APPLIED_AUTOMATICALLY')
    return { action: 'poll', code: 'fix_auto_applied' };

  // --- Auto-apply path (couldAutoApplyTasks) ---
  if (couldAutoApplyTasks === true) {
    if (autoApplySkipped === true)
      return {
        action: 'done',
        code: 'fix_auto_apply_skipped',
        extra: { autoApplySkipReason },
      };
    if (
      verificationStatus === 'NOT_STARTED' ||
      verificationStatus === 'IN_PROGRESS'
    )
      return { action: 'poll', code: 'verification_pending' };
    if (verificationStatus === 'COMPLETED')
      return { action: 'done', code: 'fix_auto_applying' };
    // verification FAILED or NOT_EXECUTABLE → falls through to fix_needs_review
  }

  // --- Fix available ---
  if (selfHealingStatus === 'COMPLETED') {
    if (
      verificationStatus === 'FAILED' ||
      verificationStatus === 'NOT_EXECUTABLE' ||
      (couldAutoApplyTasks !== true && !verificationStatus)
    )
      return { action: 'done', code: 'fix_needs_review' };

    const tasks = categorizeTasks();
    if (tasks.category === 'all_verified' || tasks.category === 'e2e_only')
      return { action: 'done', code: 'fix_apply_ready' };
    return {
      action: 'done',
      code: 'fix_needs_local_verify',
      extra: { verifiableTaskIds: tasks.verifiableTaskIds },
    };
  }

  // --- Fix failed ---
  if (selfHealingStatus === 'FAILED')
    return { action: 'done', code: 'fix_failed' };

  // --- No fix available ---
  if (
    cipeStatus === 'FAILED' &&
    (selfHealingEnabled === false || selfHealingStatus === 'NOT_EXECUTABLE')
  )
    return { action: 'done', code: 'no_fix' };

  // --- Fallback ---
  return { action: 'poll', code: 'fallback' };
}

// ============================================================
// buildOutput() — maps classification to full JSON output
// ============================================================

// Message templates keyed by status or key
const messages = {
  // wait mode
  new_cipe_detected: () =>
    `New CI Attempt detected! CI: ${cipeStatus || 'N/A'}`,
  no_new_cipe: () =>
    'New CI Attempt timeout exceeded. No new CI Attempt detected.',
  waiting_for_cipe: () => 'Waiting for new CI Attempt...',

  // guards
  polling_timeout: () => 'Polling timeout exceeded.',
  circuit_breaker: () => 'No progress after 5 consecutive polls. Stopping.',

  // terminal
  ci_success: () => 'CI passed successfully!',
  cipe_canceled: () => 'CI Attempt was canceled.',
  cipe_timed_out: () => 'CI Attempt timed out.',
  cipe_no_tasks: () => 'CI failed but no Nx tasks were recorded.',

  // environment
  environment_rerun_cap: () => 'Environment rerun cap (2) exceeded. Bailing.',
  environment_issue: () => 'CI: FAILED | Classification: ENVIRONMENT_STATE',

  // throttled
  self_healing_throttled: () =>
    'Self-healing throttled \u2014 too many unapplied fixes.',

  // polling
  ci_running: () => `CI: ${cipeStatus}`,
  sh_running: () => `CI: ${cipeStatus} | Self-healing: ${selfHealingStatus}`,
  flaky_rerun: () =>
    'CI: FAILED | Classification: FLAKY_TASK (auto-rerun in progress)',
  fix_auto_applied: () =>
    'CI: FAILED | Fix auto-applied, new CI Attempt spawning',
  verification_pending: () =>
    `CI: FAILED | Self-healing: COMPLETED | Verification: ${verificationStatus}`,

  // actionable
  fix_auto_applying: () => 'Fix verified! Auto-applying...',
  fix_auto_apply_skipped: (extra) =>
    `Fix verified but auto-apply was skipped. ${
      extra?.autoApplySkipReason
        ? `Reason: ${extra.autoApplySkipReason}`
        : 'Offer to apply manually.'
    }`,
  fix_needs_review: () =>
    `Fix available but needs review. Verification: ${
      verificationStatus || 'N/A'
    }`,
  fix_apply_ready: () => 'Fix available and verified. Ready to apply.',
  fix_needs_local_verify: (extra) =>
    `Fix available. ${extra.verifiableTaskIds.length} task(s) need local verification.`,
  fix_failed: () => 'Self-healing failed to generate a fix.',
  no_fix: () => 'CI failed, no fix available.',

  // fallback
  fallback: () =>
    `CI: ${cipeStatus || 'N/A'} | Self-healing: ${
      selfHealingStatus || 'N/A'
    } | Verification: ${verificationStatus || 'N/A'}`,
};

// Codes where noProgressCount resets to 0 (genuine progress occurred)
const resetProgressCodes = new Set([
  'ci_success',
  'fix_auto_applying',
  'fix_auto_apply_skipped',
  'fix_needs_review',
  'fix_apply_ready',
  'fix_needs_local_verify',
]);

function formatMessage(msg) {
  if (verbosity === 'minimal') {
    const currentStatus = `${cipeStatus}|${selfHealingStatus}|${verificationStatus}`;
    if (currentStatus === (prevStatus || '')) return null;
    return msg;
  }
  if (verbosity === 'verbose') {
    return [
      `Poll #${pollCount + 1} | CI: ${cipeStatus || 'N/A'} | Self-healing: ${
        selfHealingStatus || 'N/A'
      } | Verification: ${verificationStatus || 'N/A'}`,
      msg,
    ].join('\n');
  }
  return `Poll #${pollCount + 1} | ${msg}`;
}

function buildOutput(decision) {
  const { action, code, extra } = decision;

  // noProgressCount is already computed before classify() was called.
  // Here we only handle the reset for "genuine progress" done-codes.

  const msgFn = messages[code];
  const rawMsg = msgFn ? msgFn(extra) : `Unknown: ${code}`;
  const message = formatMessage(rawMsg);

  const result = {
    action,
    code,
    message,
    noProgressCount: resetProgressCodes.has(code) ? 0 : noProgressCount,
    envRerunCount,
  };

  // Add delay
  if (action === 'wait') {
    result.delay = 30;
  } else if (action === 'poll') {
    result.delay = code === 'new_cipe_detected' ? 60 : backoff(noProgressCount);
    result.fields = 'light';
  }

  // Add extras
  if (code === 'new_cipe_detected') result.newCipeDetected = true;
  if (extra?.verifiableTaskIds)
    result.verifiableTaskIds = extra.verifiableTaskIds;
  if (extra?.autoApplySkipReason)
    result.autoApplySkipReason = extra.autoApplySkipReason;

  console.log(JSON.stringify(result));
}

// --- Run ---

// Compute noProgressCount from input. Single assignment, no mutation.
// Wait mode: reset on new cipe, otherwise unchanged (wait doesn't count as no-progress).
// Normal mode: reset on any state change, otherwise increment.
const noProgressCount = (() => {
  if (waitMode) return isNewCipe() ? 0 : inputNoProgressCount;
  if (isNewCipe() || hasStateChanged()) return 0;
  return inputNoProgressCount + 1;
})();

buildOutput(classify());
```

## File: .github/skills/monitor-ci/scripts/ci-state-update.mjs
```javascript
#!/usr/bin/env node

/**
 * CI State Update Script
 *
 * Deterministic state management for CI monitor actions.
 * Three commands: gate, post-action, cycle-check.
 *
 * Usage:
 *   node ci-state-update.mjs gate --gate-type <local-fix|env-rerun> [counter args]
 *   node ci-state-update.mjs post-action --action <type> [--cipe-url <url>] [--commit-sha <sha>]
 *   node ci-state-update.mjs cycle-check --code <code> [--agent-triggered] [counter args]
 */

// --- Arg parsing ---

const args = process.argv.slice(2);
const command = args[0];

function getFlag(name) {
  return args.includes(name);
}

function getArg(name) {
  const idx = args.indexOf(name);
  return idx !== -1 && idx + 1 < args.length ? args[idx + 1] : null;
}

function output(result) {
  console.log(JSON.stringify(result));
}

// --- gate ---
// Check if an action is allowed and return incremented counter.
// Called before any local fix attempt or environment rerun.

function gate() {
  const gateType = getArg('--gate-type');

  if (gateType === 'local-fix') {
    const count = parseInt(getArg('--local-verify-count') || '0', 10);
    const max = parseInt(getArg('--local-verify-attempts') || '3', 10);
    if (count >= max) {
      return output({
        allowed: false,
        localVerifyCount: count,
        message: `Local fix budget exhausted (${count}/${max} attempts)`,
      });
    }
    return output({
      allowed: true,
      localVerifyCount: count + 1,
      message: null,
    });
  }

  if (gateType === 'env-rerun') {
    const count = parseInt(getArg('--env-rerun-count') || '0', 10);
    if (count >= 2) {
      return output({
        allowed: false,
        envRerunCount: count,
        message: `Environment issue persists after ${count} reruns. Manual investigation needed.`,
      });
    }
    return output({
      allowed: true,
      envRerunCount: count + 1,
      message: null,
    });
  }

  output({ allowed: false, message: `Unknown gate type: ${gateType}` });
}

// --- post-action ---
// Compute next state after an action is taken.
// Returns wait mode params and whether the action was agent-triggered.

function postAction() {
  const action = getArg('--action');
  const cipeUrl = getArg('--cipe-url');
  const commitSha = getArg('--commit-sha');

  // MCP-triggered or auto-applied: track by cipeUrl
  const cipeUrlActions = ['fix-auto-applying', 'apply-mcp', 'env-rerun'];
  // Local push: track by commitSha
  const commitShaActions = [
    'apply-local-push',
    'reject-fix-push',
    'local-fix-push',
    'auto-fix-push',
    'empty-commit-push',
  ];

  const trackByCipeUrl = cipeUrlActions.includes(action);
  const trackByCommitSha = commitShaActions.includes(action);

  if (!trackByCipeUrl && !trackByCommitSha) {
    return output({ error: `Unknown action: ${action}` });
  }

  // fix-auto-applying: self-healing did it, NOT the monitor
  const agentTriggered = action !== 'fix-auto-applying';

  output({
    waitMode: true,
    pollCount: 0,
    lastCipeUrl: trackByCipeUrl ? cipeUrl : null,
    expectedCommitSha: trackByCommitSha ? commitSha : null,
    agentTriggered,
  });
}

// --- cycle-check ---
// Cycle classification + counter resets when a new "done" code is received.
// Called at the start of handling each actionable code.

function cycleCheck() {
  const status = getArg('--code');
  const wasAgentTriggered = getFlag('--agent-triggered');
  let cycleCount = parseInt(getArg('--cycle-count') || '0', 10);
  const maxCycles = parseInt(getArg('--max-cycles') || '10', 10);
  let envRerunCount = parseInt(getArg('--env-rerun-count') || '0', 10);

  // Cycle classification: if previous cycle was agent-triggered, count it
  if (wasAgentTriggered) cycleCount++;

  // Reset env_rerun_count on non-environment status
  if (status !== 'environment_issue') envRerunCount = 0;

  // Approaching limit gate
  const approachingLimit = cycleCount >= maxCycles - 2;

  output({
    cycleCount,
    agentTriggered: false,
    envRerunCount,
    approachingLimit,
    message: approachingLimit
      ? `Approaching cycle limit (${cycleCount}/${maxCycles})`
      : null,
  });
}

// --- Dispatch ---

switch (command) {
  case 'gate':
    gate();
    break;
  case 'post-action':
    postAction();
    break;
  case 'cycle-check':
    cycleCheck();
    break;
  default:
    output({ error: `Unknown command: ${command}` });
}
```

## File: .prettierignore
```
# Add files here to ignore them from prettier formatting
/dist
/coverage
/.nx/cache
/.nx/workspace-data
.nx/self-healing
```

## File: backend/.gitignore
```
node_modules
# Keep environment variables out of version control
.env

/src/generated/prisma
```

## File: backend/docker-entrypoint.sh
```bash
set -e
npx prisma migrate deploy
exec node main.js
```

## File: backend/Dockerfile
```
# ============================== STAGE 1: BUILD ==================================
FROM node:22-alpine AS builder

WORKDIR /app

# cai dat pnpm moi nhat
RUN corepack enable && corepack prepare pnpm@latest --activate

# Layer cache: cài dependency trước
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml nx.json tsconfig.base.json ./
COPY backend ./backend

RUN pnpm install --frozen-lockfile

# Generate Prisma client
RUN pnpm --filter @org/backend exec prisma generate

# Build backend
RUN pnpm nx build backend

# ============================== STAGE 2: RUN ==================================
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy build output from builder stage
COPY --from=builder /app/dist/backend ./

RUN npm install --omit=dev

# Prisma
COPY --from=builder /app/backend/prisma ./prisma
COPY --from=builder /app/backend/prisma.config.ts ./
COPY --from=builder /app/backend/src/generated ./src/generated

COPY backend/docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 3000
ENTRYPOINT ["/docker-entrypoint.sh"]
```

## File: backend/eslint.config.mjs
```javascript
import baseConfig from '../eslint.config.mjs';

export default [...baseConfig];
```

## File: backend/prisma.config.ts
```typescript
import "dotenv/config";
import { defineConfig } from "prisma/config";
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
```

## File: backend/prisma/migrations/20260515144008_init_user/migration.sql
```sql
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
```

## File: backend/prisma/migrations/20260517120553_init/migration.sql
```sql
/*
  Warnings:
  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(500)`.
  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(500)`.
  - Added the required column `phoneNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleId` to the `User` table without a default value. This is not possible if the table is not empty.
*/
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'SUCCESS', 'FAILED');
CREATE TYPE "OrderStatus" AS ENUM ('PENDING_PAYMENT', 'PENDING_PICKUP', 'PENDING_DELIVERY', 'DELIVERED', 'RETURNED', 'CANCELLED');
CREATE TYPE "VerificationCodeType" AS ENUM ('REGISTER', 'FORGOT_PASSWORD', 'LOGIN', 'DISABLE_2FA');
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'BLOCKED');
CREATE TYPE "HTTPMethod" AS ENUM ('GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD');
CREATE TYPE "MediaType" AS ENUM ('IMAGE', 'VIDEO');
DROP INDEX "User_email_key";
ALTER TABLE "User" ADD COLUMN     "avatar" VARCHAR(1000),
ADD COLUMN     "createdById" INTEGER,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "deletedById" INTEGER,
ADD COLUMN     "phoneNumber" VARCHAR(50) NOT NULL,
ADD COLUMN     "roleId" INTEGER NOT NULL,
ADD COLUMN     "status" "UserStatus" NOT NULL DEFAULT 'INACTIVE',
ADD COLUMN     "totpSecret" VARCHAR(1000),
ADD COLUMN     "updatedById" INTEGER,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(500),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(500);
CREATE TABLE "Language" (
    "id" VARCHAR(10) NOT NULL,
    "name" VARCHAR(500) NOT NULL,
    "createdById" INTEGER,
    "updatedById" INTEGER,
    "deletedById" INTEGER,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "UserTranslation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "languageId" TEXT NOT NULL,
    "address" VARCHAR(500),
    "description" TEXT,
    "createdById" INTEGER,
    "updatedById" INTEGER,
    "deletedById" INTEGER,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "UserTranslation_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "VerificationCode" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(500) NOT NULL,
    "code" VARCHAR(50) NOT NULL,
    "type" "VerificationCodeType" NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "VerificationCode_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Device" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "userAgent" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "lastActive" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "RefreshToken" (
    "token" VARCHAR(1000) NOT NULL,
    "userId" INTEGER NOT NULL,
    "deviceId" INTEGER NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE "Permission" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(500) NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "path" VARCHAR(1000) NOT NULL,
    "method" "HTTPMethod" NOT NULL,
    "module" VARCHAR(500) NOT NULL DEFAULT '',
    "createdById" INTEGER,
    "updatedById" INTEGER,
    "deletedById" INTEGER,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Permission_pkey" PRIMARY KEY ("id")
);
-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(500) NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdById" INTEGER,
    "updatedById" INTEGER,
    "deletedById" INTEGER,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "publishedAt" TIMESTAMP(3),
    "name" VARCHAR(500) NOT NULL,
    "basePrice" DOUBLE PRECISION NOT NULL,
    "virtualPrice" DOUBLE PRECISION NOT NULL,
    "brandId" INTEGER NOT NULL,
    "images" TEXT[],
    "variants" JSONB NOT NULL,
    "createdById" INTEGER NOT NULL,
    "updatedById" INTEGER,
    "deletedById" INTEGER,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "ProductTranslation" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "languageId" TEXT NOT NULL,
    "name" VARCHAR(500) NOT NULL,
    "description" TEXT NOT NULL,
    "createdById" INTEGER,
    "updatedById" INTEGER,
    "deletedById" INTEGER,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "ProductTranslation_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(500) NOT NULL,
    "logo" VARCHAR(1000),
    "parentCategoryId" INTEGER,
    "createdById" INTEGER,
    "updatedById" INTEGER,
    "deletedById" INTEGER,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "CategoryTranslation" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "languageId" TEXT NOT NULL,
    "name" VARCHAR(500) NOT NULL,
    "description" TEXT NOT NULL,
    "createdById" INTEGER,
    "updatedById" INTEGER,
    "deletedById" INTEGER,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "CategoryTranslation_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "SKU" (
    "id" SERIAL NOT NULL,
    "value" VARCHAR(500) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "createdById" INTEGER NOT NULL,
    "updatedById" INTEGER,
    "deletedById" INTEGER,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "SKU_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "logo" VARCHAR(1000) NOT NULL,
    "name" VARCHAR(500) NOT NULL,
    "createdById" INTEGER,
    "updatedById" INTEGER,
    "deletedById" INTEGER,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "BrandTranslation" (
    "id" SERIAL NOT NULL,
    "brandId" INTEGER NOT NULL,
    "languageId" TEXT NOT NULL,
    "name" VARCHAR(500) NOT NULL,
    "description" TEXT NOT NULL,
    "createdById" INTEGER,
    "updatedById" INTEGER,
    "deletedById" INTEGER,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "BrandTranslation_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "CartItem" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "skuId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "ProductSKUSnapshot" (
    "id" SERIAL NOT NULL,
    "productName" VARCHAR(500) NOT NULL,
    "skuPrice" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "skuValue" VARCHAR(500) NOT NULL,
    "skuId" INTEGER,
    "orderId" INTEGER,
    "quantity" INTEGER NOT NULL,
    "productId" INTEGER,
    "productTranslations" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ProductSKUSnapshot_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "OrderStatus" NOT NULL,
    "receiver" JSONB NOT NULL,
    "shopId" INTEGER,
    "paymentId" INTEGER NOT NULL,
    "createdById" INTEGER,
    "updatedById" INTEGER,
    "deletedById" INTEGER,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "status" "PaymentStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Websocket" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Websocket_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "updateCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "ReviewMedia" (
    "id" SERIAL NOT NULL,
    "url" VARCHAR(1000) NOT NULL,
    "type" "MediaType" NOT NULL,
    "reviewId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ReviewMedia_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "PaymentTransaction" (
    "id" SERIAL NOT NULL,
    "gateway" VARCHAR(100) NOT NULL,
    "transactionDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accountNumber" VARCHAR(100),
    "subAccount" VARCHAR(250),
    "amountIn" INTEGER NOT NULL DEFAULT 0,
    "amountOut" INTEGER NOT NULL DEFAULT 0,
    "accumulated" INTEGER NOT NULL DEFAULT 0,
    "code" VARCHAR(250),
    "transactionContent" TEXT,
    "referenceNumber" VARCHAR(255),
    "body" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "PaymentTransaction_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "fromUserId" INTEGER NOT NULL,
    "toUserId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "readAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "_PermissionToRole" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PermissionToRole_AB_pkey" PRIMARY KEY ("A","B")
);
CREATE TABLE "_CategoryToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CategoryToProduct_AB_pkey" PRIMARY KEY ("A","B")
);
CREATE TABLE "_OrderToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_OrderToProduct_AB_pkey" PRIMARY KEY ("A","B")
);
CREATE INDEX "Language_deletedAt_idx" ON "Language"("deletedAt");
CREATE INDEX "UserTranslation_deletedAt_idx" ON "UserTranslation"("deletedAt");
CREATE INDEX "VerificationCode_expiresAt_idx" ON "VerificationCode"("expiresAt");
CREATE UNIQUE INDEX "VerificationCode_email_type_key" ON "VerificationCode"("email", "type");
CREATE UNIQUE INDEX "RefreshToken_token_key" ON "RefreshToken"("token");
CREATE INDEX "RefreshToken_expiresAt_idx" ON "RefreshToken"("expiresAt");
CREATE INDEX "Permission_deletedAt_idx" ON "Permission"("deletedAt");
CREATE INDEX "Role_deletedAt_idx" ON "Role"("deletedAt");
CREATE INDEX "Product_deletedAt_idx" ON "Product"("deletedAt");
CREATE INDEX "ProductTranslation_deletedAt_idx" ON "ProductTranslation"("deletedAt");
CREATE INDEX "ProductTranslation_productId_idx" ON "ProductTranslation"("productId");
CREATE INDEX "Category_deletedAt_idx" ON "Category"("deletedAt");
CREATE INDEX "CategoryTranslation_deletedAt_idx" ON "CategoryTranslation"("deletedAt");
CREATE INDEX "SKU_deletedAt_idx" ON "SKU"("deletedAt");
CREATE INDEX "SKU_productId_idx" ON "SKU"("productId");
CREATE INDEX "Brand_deletedAt_idx" ON "Brand"("deletedAt");
CREATE INDEX "BrandTranslation_deletedAt_idx" ON "BrandTranslation"("deletedAt");
CREATE INDEX "CartItem_userId_idx" ON "CartItem"("userId");
CREATE UNIQUE INDEX "CartItem_userId_skuId_key" ON "CartItem"("userId", "skuId");
CREATE INDEX "Order_deletedAt_idx" ON "Order"("deletedAt");
CREATE INDEX "Order_status_deletedAt_idx" ON "Order"("status", "deletedAt");
CREATE INDEX "Review_userId_idx" ON "Review"("userId");
CREATE INDEX "Review_productId_idx" ON "Review"("productId");
CREATE UNIQUE INDEX "Review_orderId_productId_key" ON "Review"("orderId", "productId");
CREATE INDEX "_PermissionToRole_B_index" ON "_PermissionToRole"("B");
CREATE INDEX "_CategoryToProduct_B_index" ON "_CategoryToProduct"("B");
CREATE INDEX "_OrderToProduct_B_index" ON "_OrderToProduct"("B");
CREATE INDEX "User_deletedAt_idx" ON "User"("deletedAt");
ALTER TABLE "Language" ADD CONSTRAINT "Language_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "Language" ADD CONSTRAINT "Language_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "Language" ADD CONSTRAINT "Language_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "User" ADD CONSTRAINT "User_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "User" ADD CONSTRAINT "User_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "User" ADD CONSTRAINT "User_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "UserTranslation" ADD CONSTRAINT "UserTranslation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "UserTranslation" ADD CONSTRAINT "UserTranslation_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "UserTranslation" ADD CONSTRAINT "UserTranslation_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "UserTranslation" ADD CONSTRAINT "UserTranslation_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "UserTranslation" ADD CONSTRAINT "UserTranslation_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "Device" ADD CONSTRAINT "Device_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "Permission" ADD CONSTRAINT "Permission_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "Permission" ADD CONSTRAINT "Permission_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "Permission" ADD CONSTRAINT "Permission_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "Role" ADD CONSTRAINT "Role_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "Role" ADD CONSTRAINT "Role_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "Role" ADD CONSTRAINT "Role_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "Product" ADD CONSTRAINT "Product_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "Product" ADD CONSTRAINT "Product_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "Product" ADD CONSTRAINT "Product_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "Product" ADD CONSTRAINT "Product_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "ProductTranslation" ADD CONSTRAINT "ProductTranslation_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "ProductTranslation" ADD CONSTRAINT "ProductTranslation_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "ProductTranslation" ADD CONSTRAINT "ProductTranslation_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "ProductTranslation" ADD CONSTRAINT "ProductTranslation_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "ProductTranslation" ADD CONSTRAINT "ProductTranslation_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentCategoryId_fkey" FOREIGN KEY ("parentCategoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "Category" ADD CONSTRAINT "Category_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "Category" ADD CONSTRAINT "Category_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "Category" ADD CONSTRAINT "Category_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "CategoryTranslation" ADD CONSTRAINT "CategoryTranslation_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "CategoryTranslation" ADD CONSTRAINT "CategoryTranslation_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "CategoryTranslation" ADD CONSTRAINT "CategoryTranslation_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "CategoryTranslation" ADD CONSTRAINT "CategoryTranslation_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "CategoryTranslation" ADD CONSTRAINT "CategoryTranslation_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "SKU" ADD CONSTRAINT "SKU_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "SKU" ADD CONSTRAINT "SKU_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "SKU" ADD CONSTRAINT "SKU_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "SKU" ADD CONSTRAINT "SKU_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "Brand" ADD CONSTRAINT "Brand_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "Brand" ADD CONSTRAINT "Brand_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "Brand" ADD CONSTRAINT "Brand_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "BrandTranslation" ADD CONSTRAINT "BrandTranslation_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "BrandTranslation" ADD CONSTRAINT "BrandTranslation_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "BrandTranslation" ADD CONSTRAINT "BrandTranslation_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "BrandTranslation" ADD CONSTRAINT "BrandTranslation_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "BrandTranslation" ADD CONSTRAINT "BrandTranslation_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_skuId_fkey" FOREIGN KEY ("skuId") REFERENCES "SKU"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "ProductSKUSnapshot" ADD CONSTRAINT "ProductSKUSnapshot_skuId_fkey" FOREIGN KEY ("skuId") REFERENCES "SKU"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "ProductSKUSnapshot" ADD CONSTRAINT "ProductSKUSnapshot_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "ProductSKUSnapshot" ADD CONSTRAINT "ProductSKUSnapshot_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "Order" ADD CONSTRAINT "Order_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "Order" ADD CONSTRAINT "Order_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "Order" ADD CONSTRAINT "Order_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "Order" ADD CONSTRAINT "Order_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "Order" ADD CONSTRAINT "Order_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "Websocket" ADD CONSTRAINT "Websocket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "Review" ADD CONSTRAINT "Review_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "Review" ADD CONSTRAINT "Review_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "ReviewMedia" ADD CONSTRAINT "ReviewMedia_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "Message" ADD CONSTRAINT "Message_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "Message" ADD CONSTRAINT "Message_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "_PermissionToRole" ADD CONSTRAINT "_PermissionToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "Permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "_PermissionToRole" ADD CONSTRAINT "_PermissionToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "_CategoryToProduct" ADD CONSTRAINT "_CategoryToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "_CategoryToProduct" ADD CONSTRAINT "_CategoryToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "_OrderToProduct" ADD CONSTRAINT "_OrderToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "_OrderToProduct" ADD CONSTRAINT "_OrderToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
```

## File: backend/prisma/migrations/20260524101928_add_unique_email/migration.sql
```sql
/*
  Warnings:
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
*/
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
```

## File: backend/prisma/migrations/20260524103145_partial_unique_index/migration.sql
```sql
CREATE UNIQUE INDEX permission_path_method_unique
ON "Permission" (path, method)
WHERE "deletedAt" IS NULL;
```

## File: backend/prisma/migrations/20260525132600_role_unique_name/migration.sql
```sql
CREATE UNIQUE INDEX role_name_unique
ON "Permission" (name)
WHERE "deletedAt" IS NULL;
```

## File: backend/prisma/migrations/20260525133916_drop_unique_key_and_crete_role_unique_name/migration.sql
```sql
DROP INDEX role_name_unique;
CREATE UNIQUE INDEX role_name_unique
ON "Role" (name)
WHERE "deletedAt" IS NULL;
```

## File: backend/prisma/migrations/20260601164737_unique_email_user/migration.sql
```sql
DROP INDEX "User_email_key";
CREATE UNIQUE INDEX user_email_unique
ON "User" (email)
WHERE "deletedAt" IS NULL;
```

## File: backend/prisma/migrations/migration_lock.toml
```toml
# Please do not edit this file manually
# It should be added in your version-control system (e.g., Git)
provider = "postgresql"
```

## File: backend/src/app/app.controller.spec.ts
```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
describe('AppController', () => {
  let app: TestingModule;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });
  describe('getData', () => {
    it('should return "Hello API"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
```

## File: backend/src/app/app.service.spec.ts
```typescript
import { Test } from '@nestjs/testing';
import { AppService } from './app.service';
describe('AppService', () => {
  let service: AppService;
  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();
    service = app.get<AppService>(AppService);
  });
  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(service.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
```

## File: backend/src/assets/.gitkeep
```

```

## File: backend/src/emails/aws-verify-email.tsx
```typescript
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from 'react-email'
export interface OtpVerifyEmailProps {
  verificationCode?: string
}
const colors = {
  text: '#333333',
  textDark: '#212121',
  link: '#2754C5',
  headerBg: '#252f3d',
  containerBg: '#eeeeee',
  cardBg: '#ffffff',
}
export default function AWSVerifyEmail({ verificationCode }: OtpVerifyEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Email verification code</Preview>
      <Body
        style={{
          backgroundColor: colors.cardBg,
          color: colors.textDark,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          margin: 0,
        }}
      >
        <Container
          style={{
            backgroundColor: colors.containerBg,
            margin: '0 auto',
            padding: '20px',
            maxWidth: '600px',
          }}
        >
          <Section style={{ backgroundColor: colors.cardBg }}>
            <Section
              style={{
                backgroundColor: colors.headerBg,
                padding: '20px 0',
                textAlign: 'center',
              }}
            >
              <Img
                src="https://i.pinimg.com/736x/07/74/87/077487ce2e1b6b66c72a6f62d39244b3.jpg"
                width="75"
                height="45"
                alt="Logo"
                style={{ margin: '0 auto' }}
              />
            </Section>
            <Section style={{ padding: '25px 35px' }}>
              <Heading
                style={{
                  color: colors.text,
                  fontSize: '20px',
                  fontWeight: 'bold',
                  margin: '0 0 15px',
                }}
              >
                Verify your email address
              </Heading>
              <Text
                style={{
                  color: colors.text,
                  fontSize: '14px',
                  lineHeight: '24px',
                  margin: '24px 0 14px',
                }}
              >
                Thanks for signing up. We want to make sure it&apos;s really you. Please enter
                the following verification code when prompted. If you don&apos;t want to create an
                account, you can ignore this message.
              </Text>
              <Section style={{ textAlign: 'center' }}>
                <Text
                  style={{
                    color: colors.text,
                    fontSize: '14px',
                    fontWeight: 'bold',
                    margin: '0 0 8px',
                    textAlign: 'center',
                  }}
                >
                  Verification code
                </Text>
                <Text
                  style={{
                    color: colors.text,
                    fontSize: '36px',
                    fontWeight: 'bold',
                    margin: '10px 0',
                    textAlign: 'center',
                    letterSpacing: '4px',
                  }}
                >
                  {verificationCode}
                </Text>
                <Text
                  style={{
                    color: colors.text,
                    fontSize: '14px',
                    margin: 0,
                    textAlign: 'center',
                  }}
                >
                  (This code is valid for 10 minutes)
                </Text>
              </Section>
            </Section>
            <Hr style={{ borderColor: '#e6e6e6', margin: 0 }} />
            <Section style={{ padding: '25px 35px' }}>
              <Text style={{ color: colors.text, fontSize: '14px', margin: 0 }}>
                We will never email you and ask you to disclose or verify your password, credit
                card, or banking account number.
              </Text>
            </Section>
          </Section>
          <Text
            style={{
              color: colors.text,
              fontSize: '12px',
              margin: '24px 0 0',
              padding: '0 20px',
              lineHeight: '20px',
            }}
          >
            If you have questions, contact our support team. View our{' '}
            <Link
              href="https://example.com/privacy"
              target="_blank"
              style={{
                color: colors.link,
                fontSize: '14px',
                textDecoration: 'underline',
              }}
            >
              privacy policy
            </Link>
            .
          </Text>
        </Container>
      </Body>
    </Html>
  )
}
AWSVerifyEmail.PreviewProps = {
  verificationCode: '596853',
} satisfies OtpVerifyEmailProps
```

## File: backend/src/initialScript/index.ts
```typescript
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../generated/prisma/client'
import { RoleName } from '../shared/constants/role.constant'
import { HashingService } from '../shared/services/hashing.service'
import { config } from 'dotenv'
import path from 'path'
config({ path: path.resolve(process.cwd(), '.env') })
if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is not set')
  process.exit(1)
}
const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }) })
const hashingService = new HashingService()
const main = async () => {
  const newRoles = await prisma.role.createMany({
    data: [{ name: RoleName.ADMIN }, { name: RoleName.CLIENT }, { name: RoleName.SELLER }],
  })
  const adminAccount = await prisma.user.findFirst({
    where: {
      email: 'admin@gmail.com',
    },
  })
  let newAdminAccount = null
  const adminRole = await prisma.role.findFirstOrThrow({
    where: {
      name: RoleName.ADMIN,
    },
  })
  if (!adminAccount) {
    newAdminAccount = await prisma.user.create({
      data: {
        email: 'admin@gmail.com',
        name: 'Admin',
        password: await hashingService.hash('123456'),
        phoneNumber: '0909090909',
        roleId: adminRole.id,
      },
    })
  }
  return { newAdminAccount, roleCount: newRoles.count }
}
main()
  .then((value) => {
    console.log('Khởi tạo dữ liệu thành công')
    console.log('Tài khoản admin: ', value?.newAdminAccount)
    console.log('Số lượng role: ', value?.roleCount)
    process.exit(0)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
```

## File: backend/src/routes/language/language.controller.ts
```typescript
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { LanguageService } from './language.service'
import { ZodSerializerDto } from 'nestjs-zod'
import {
  CreateLanguageBodyDTO,
  GetLanguageDetailResDTO,
  GetLanguageParamsDTO,
  GetLanguagesResDTO,
  UpdateLanguageBodyDTO,
} from './language.dto'
import { ActiveUser } from '../../shared/decorators/active-user.decorator'
import { MessageResDTO } from '../../shared/dtos/response.dto'
@Controller('language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}
  @Get()
  @ZodSerializerDto(GetLanguagesResDTO)
  findAll() {
    return this.languageService.findAll()
  }
  @Get(':languageId')
  @ZodSerializerDto(GetLanguageDetailResDTO)
  findById(@Param() params: GetLanguageParamsDTO) {
    return this.languageService.findById(params.languageId)
  }
  @Post()
  @ZodSerializerDto(GetLanguageDetailResDTO)
  create(@Body() body: CreateLanguageBodyDTO, @ActiveUser('userId') userId: number) {
    return this.languageService.create({
      data: body,
      createdById: userId,
    })
  }
  @Put(':languageId')
  @ZodSerializerDto(GetLanguageDetailResDTO)
  update(
    @Body() body: UpdateLanguageBodyDTO,
    @Param() params: GetLanguageParamsDTO,
    @ActiveUser('userId') userId: number,
  ) {
    return this.languageService.update({
      data: body,
      id: params.languageId,
      updatedById: userId,
    })
  }
  @Delete(':languageId')
  @ZodSerializerDto(MessageResDTO)
  delete(@Param() params: GetLanguageParamsDTO) {
    return this.languageService.delete(params.languageId)
  }
}
```

## File: backend/src/routes/language/language.dto.ts
```typescript
import { createZodDto } from 'nestjs-zod'
import {
  CreateLanguageBodySchema,
  GetLanguageDetailResSchema,
  GetLanguageParamsSchema,
  GetLanguagesResSchema,
  UpdateLanguageBodySchema,
} from './language.model'
export class GetLanguagesResDTO extends createZodDto(GetLanguagesResSchema) {}
export class GetLanguageParamsDTO extends createZodDto(GetLanguageParamsSchema) {}
export class GetLanguageDetailResDTO extends createZodDto(GetLanguageDetailResSchema) {}
export class CreateLanguageBodyDTO extends createZodDto(CreateLanguageBodySchema) {}
export class UpdateLanguageBodyDTO extends createZodDto(UpdateLanguageBodySchema) {}
```

## File: backend/src/routes/language/language.model.ts
```typescript
import { z } from 'zod'
export const LanguageSchema = z.object({
  id: z.string().max(10),
  name: z.string().max(500),
  createdById: z.number().nullable(),
  updatedById: z.number().nullable(),
  deletedAt: z.date().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
export const GetLanguagesResSchema = z.object({
  data: z.array(LanguageSchema),
  totalItems: z.number(),
})
export const GetLanguageParamsSchema = z
  .object({
    languageId: z.string().max(10),
  })
  .strict()
export const GetLanguageDetailResSchema = LanguageSchema
export const CreateLanguageBodySchema = LanguageSchema.pick({
  id: true,
  name: true,
}).strict()
export const UpdateLanguageBodySchema = LanguageSchema.pick({
  name: true,
}).strict()
export type LanguageType = z.infer<typeof LanguageSchema>
export type GetLanguagesResType = z.infer<typeof GetLanguagesResSchema>
export type GetLanguageDetailResType = z.infer<typeof GetLanguageDetailResSchema>
export type CreateLanguageBodyType = z.infer<typeof CreateLanguageBodySchema>
export type GetLanguageParamsType = z.infer<typeof GetLanguageParamsSchema>
export type UpdateLanguageBodyType = z.infer<typeof UpdateLanguageBodySchema>
```

## File: backend/src/routes/language/language.module.ts
```typescript
import { Module } from '@nestjs/common'
import { SharedModule } from '../../shared/shared.module'
import { LanguageController } from './language.controller'
import { LanguageService } from './language.service'
import { LanguageRepo } from './language.repo'
@Module({
  controllers: [LanguageController],
  providers: [LanguageService, LanguageRepo],
  imports: [SharedModule],
})
export class LanguageModule {}
```

## File: backend/src/routes/language/language.repo.ts
```typescript
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../shared/services/prisma.service'
import { CreateLanguageBodyType, LanguageType, UpdateLanguageBodyType } from './language.model'
@Injectable()
export class LanguageRepo {
  constructor(private readonly prisma: PrismaService) {}
  findAll(): Promise<LanguageType[]> {
    return this.prisma.language.findMany({
      where: {
        deletedAt: null,
      },
    })
  }
  findById(id: string): Promise<LanguageType | null> {
    return this.prisma.language.findUnique({
      where: {
        id,
        deletedAt: null,
      },
    })
  }
  create({ createdById, data }: { createdById: number; data: CreateLanguageBodyType }) {
    return this.prisma.language.create({
      data: {
        ...data,
        createdById,
      },
    })
  }
  update({
    id,
    updatedById,
    data,
  }: {
    id: string
    updatedById: number
    data: UpdateLanguageBodyType
  }): Promise<LanguageType> {
    return this.prisma.language.update({
      where: {
        id,
        deletedAt: null,
      },
      data: {
        ...data,
        updatedById,
      },
    })
  }
  async delete(id: string, isHard?: boolean): Promise<LanguageType> {
    if (isHard) {
      return await this.prisma.language.delete({
        where: { id },
      })
    } else {
      return await this.prisma.language.update({
        where: { id, deletedAt: null },
        data: { deletedAt: new Date() },
      })
    }
  }
}
```

## File: backend/src/routes/permission/permission.controller.ts
```typescript
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ZodSerializerDto } from 'nestjs-zod'
import { ActiveUser } from '../../shared/decorators/active-user.decorator'
import { PermissionService } from './permission.service'
import {
  CreatePermissionBodyDTO,
  GetPermissionDetailResDTO,
  GetPermissionParamsDTO,
  GetPermissionsQueryDTO,
  GetPermissionsResDTO,
  UpdatePermissionBodyDTO,
} from './permission.dto'
import { MessageResDTO } from '../../shared/dtos/response.dto'
@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}
  @Get()
  @ZodSerializerDto(GetPermissionsResDTO)
  list(@Query() query: GetPermissionsQueryDTO) {
    return this.permissionService.list({
      page: query.page,
      limit: query.limit,
    })
  }
  @Get(':permissionId')
  @ZodSerializerDto(GetPermissionDetailResDTO)
  findById(@Param() params: GetPermissionParamsDTO) {
    return this.permissionService.findById(params.permissionId)
  }
  @Post()
  @ZodSerializerDto(GetPermissionDetailResDTO)
  create(@Body() body: CreatePermissionBodyDTO, @ActiveUser('userId') userId: number) {
    return this.permissionService.create({
      data: body,
      createdById: userId,
    })
  }
  @Put(':permissionId')
  @ZodSerializerDto(GetPermissionDetailResDTO)
  update(
    @Body() body: UpdatePermissionBodyDTO,
    @Param() params: GetPermissionParamsDTO,
    @ActiveUser('userId') userId: number,
  ) {
    return this.permissionService.update({
      data: body,
      id: params.permissionId,
      updatedById: userId,
    })
  }
  @Delete(':permissionId')
  @ZodSerializerDto(MessageResDTO)
  delete(@Param() params: GetPermissionParamsDTO, @ActiveUser('userId') userId: number) {
    return this.permissionService.delete({ permissionId: params.permissionId, userId })
  }
}
```

## File: backend/src/routes/permission/permission.dto.ts
```typescript
import { createZodDto } from 'nestjs-zod'
import {
  CreatePermissionBodySchema,
  GetPermissionDetailResSchema,
  GetPermissionParamsSchema,
  GetPermissionsQuerySchema,
  GetPermissionsResSchema,
  UpdatePermissionBodySchema,
} from './permission.model'
export class GetPermissionsResDTO extends createZodDto(GetPermissionsResSchema) {}
export class GetPermissionParamsDTO extends createZodDto(GetPermissionParamsSchema) {}
export class GetPermissionDetailResDTO extends createZodDto(GetPermissionDetailResSchema) {}
export class CreatePermissionBodyDTO extends createZodDto(CreatePermissionBodySchema) {}
export class UpdatePermissionBodyDTO extends createZodDto(UpdatePermissionBodySchema) {}
export class GetPermissionsQueryDTO extends createZodDto(GetPermissionsQuerySchema) {}
```

## File: backend/src/routes/permission/permission.error.ts
```typescript
import { UnprocessableEntityException } from '@nestjs/common'
export const NotFoundPermissionException = new UnprocessableEntityException([
  { message: 'Error.NotFoundPermission', path: 'permission' },
])
export const PermissionAlreadyExistException = new UnprocessableEntityException([
  { message: 'Error.PermissionAlreadyExist', path: 'permission' },
])
```

## File: backend/src/routes/permission/permission.module.ts
```typescript
import { Module } from '@nestjs/common'
import { SharedModule } from '../../shared/shared.module'
import { PermissionController } from './permission.controller'
import { PermissionService } from './permission.service'
import { PermissionRepo } from './permission.repo'
@Module({
  controllers: [PermissionController],
  providers: [PermissionService, PermissionRepo],
  imports: [SharedModule],
})
export class PermissionModule {}
```

## File: backend/src/routes/permission/permission.service.ts
```typescript
import { Injectable } from '@nestjs/common'
import { PermissionRepo } from './permission.repo'
import { CreatePermissionBodyType, GetPermissionsQueryType, UpdatePermissionBodyType } from './permission.model'
import { NotFoundPermissionException, PermissionAlreadyExistException } from './permission.error'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client'
@Injectable()
export class PermissionService {
  constructor(private readonly permissionRepo: PermissionRepo) {}
  async list(value: GetPermissionsQueryType) {
    const data = await this.permissionRepo.list(value)
    return data
  }
  async findById(permissionId: number) {
    const permission = await this.permissionRepo.findById(permissionId)
    if (!permission) {
      throw NotFoundPermissionException
    }
    return permission
  }
  async create({ data, createdById }: { data: CreatePermissionBodyType; createdById: number }) {
    try {
      const newPermission = await this.permissionRepo.create({ createdById, data })
      return newPermission
    } catch (error: unknown) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw PermissionAlreadyExistException
      }
      throw error
    }
  }
  async update({ data, id, updatedById }: { data: UpdatePermissionBodyType; id: number; updatedById: number }) {
    try {
      const permission = await this.permissionRepo.update({
        id,
        updatedById,
        data,
      })
      return permission
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2005') {
        throw NotFoundPermissionException
      }
      throw error
    }
  }
  async delete({ permissionId, userId }: { permissionId: number; userId: number }) {
    try {
      await this.permissionRepo.delete({ permissionId, userId })
      return {
        message: 'Delete successfully!',
      }
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2005') {
        throw NotFoundPermissionException
      }
      throw error
    }
  }
}
```

## File: backend/src/routes/profile/profile.dto.ts
```typescript
import { createZodDto } from 'nestjs-zod'
import {
  ChangePasswordBodySchema,
  GetUserProfileResSchema,
  UpdateMeBodySchema,
  UpdateProfileResSchema,
} from './profile.model'
export class GetUserProfileResDTO extends createZodDto(GetUserProfileResSchema) {}
export class UpdateProfileResDTO extends createZodDto(UpdateProfileResSchema) {}
export class UpdateMeBodyDTO extends createZodDto(UpdateMeBodySchema) {}
export class ChangePasswordBodyDTO extends createZodDto(ChangePasswordBodySchema) {}
```

## File: backend/src/routes/profile/profile.error.ts
```typescript
import { UnprocessableEntityException } from '@nestjs/common'
export const NotFoundProfileException = new UnprocessableEntityException([
  { message: 'Error.NotFoundPermission', path: 'profile' },
])
```

## File: backend/src/routes/profile/profile.model.ts
```typescript
import z from 'zod'
import { PermissionSchema, RoleSchema, UserSchema } from '../../shared/models/entity.model'
export const GetUserProfileResSchema = UserSchema.omit({
  password: true,
  totpSecret: true,
})
  .extend({
    role: RoleSchema.pick({
      id: true,
      name: true,
    }),
  })
  .extend({
    permission: z.array(
      PermissionSchema.pick({
        id: true,
        name: true,
        module: true,
        path: true,
        method: true,
      }),
    ),
  })
export const UpdateProfileResSchema = UserSchema.omit({
  password: true,
  totpSecret: true,
})
export const UpdateMeBodySchema = UserSchema.pick({
  name: true,
  phoneNumber: true,
  avatar: true,
}).strict()
export const ChangePasswordBodySchema = UserSchema.pick({
  password: true,
})
  .extend({
    newPassword: z.string().min(6).max(100),
    confirmNewPassword: z.string().min(6).max(100),
  })
  .strict()
  .superRefine(({ newPassword, confirmNewPassword }, ctx) => {
    if (newPassword !== confirmNewPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'Error.ConfirmPasswordNotMatch',
        path: ['confirmNewPassword'],
      })
    }
  })
export type GetUserProfileResType = z.infer<typeof GetUserProfileResSchema>
export type UpdateProfileResType = z.infer<typeof UpdateProfileResSchema>
export type UpdateMeBodyType = z.infer<typeof UpdateMeBodySchema>
export type ChangePasswordBodyType = z.infer<typeof ChangePasswordBodySchema>
```

## File: backend/src/routes/profile/profile.module.ts
```typescript
import { Module } from '@nestjs/common'
import { SharedModule } from '../../shared/shared.module'
import { ProfileService } from './profile.service'
import { ProfileController } from './profile.controller'
@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
  imports: [SharedModule],
  exports: [ProfileService],
})
export class ProfileModule {}
```

## File: backend/src/routes/role/role.controller.ts
```typescript
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { RolesService } from './roles.service'
import { ZodSerializerDto } from 'nestjs-zod'
import { ActiveUser } from '../../shared/decorators/active-user.decorator'
import { MessageResDTO } from '../../shared/dtos/response.dto'
import {
  CreateRoleBodyDTO,
  CreateRoleResDTO,
  GetRoleDetailResDTO,
  GetRoleParamsDTO,
  GetRolesQueryDTO,
  GetRolesResDTO,
  UpdateRoleBodyDTO,
} from './role.dto'
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RolesService) {}
  @Get()
  @ZodSerializerDto(GetRolesResDTO)
  list(@Query() query: GetRolesQueryDTO) {
    return this.roleService.list({
      page: query.page,
      limit: query.limit,
    })
  }
  @Get(':roleId')
  @ZodSerializerDto(GetRoleDetailResDTO)
  findById(@Param() params: GetRoleParamsDTO) {
    return this.roleService.findById(params.roleId)
  }
  @Post()
  @ZodSerializerDto(CreateRoleResDTO)
  create(@Body() body: CreateRoleBodyDTO, @ActiveUser('userId') userId: number) {
    return this.roleService.create({
      data: body,
      createdById: userId,
    })
  }
  @Put(':roleId')
  @ZodSerializerDto(GetRoleDetailResDTO)
  update(@Body() body: UpdateRoleBodyDTO, @Param() params: GetRoleParamsDTO, @ActiveUser('userId') userId: number) {
    return this.roleService.update({
      data: body,
      id: params.roleId,
      updatedById: userId,
    })
  }
  @Delete(':roleId')
  @ZodSerializerDto(MessageResDTO)
  delete(@Param() params: GetRoleParamsDTO, @ActiveUser('userId') userId: number) {
    return this.roleService.delete({
      id: params.roleId,
      deletedById: userId,
    })
  }
}
```

## File: backend/src/routes/role/role.dto.ts
```typescript
import { createZodDto } from 'nestjs-zod'
import {
  CreateRoleBodySchema,
  CreateRoleResSchema,
  GetRoleDetailResSchema,
  GetRoleParamsSchema,
  GetRolesQuerySchema,
  GetRolesResSchema,
  UpdateRoleBodySchema,
} from './role.model'
export class GetRolesResDTO extends createZodDto(GetRolesResSchema) {}
export class GetRolesQueryDTO extends createZodDto(GetRolesQuerySchema) {}
export class GetRoleDetailResDTO extends createZodDto(GetRoleDetailResSchema) {}
export class GetRoleParamsDTO extends createZodDto(GetRoleParamsSchema) {}
export class CreateRoleResDTO extends createZodDto(CreateRoleResSchema) {}
export class CreateRoleBodyDTO extends createZodDto(CreateRoleBodySchema) {}
export class UpdateRoleBodyDTO extends createZodDto(UpdateRoleBodySchema) {}
```

## File: backend/src/routes/role/role.module.ts
```typescript
import { Module } from '@nestjs/common'
import { SharedModule } from '../../shared/shared.module'
import { RoleController } from './role.controller'
import { RolesService } from './roles.service'
import { RoleRepo } from './role.repo'
@Module({
  controllers: [RoleController],
  providers: [RolesService, RoleRepo],
  imports: [SharedModule],
  exports: [RolesService],
})
export class RoleModule {}
```

## File: backend/src/routes/user/user.dto.ts
```typescript
import { createZodDto } from 'nestjs-zod'
import {
  CreateUserBodySchema,
  GetUserParamsSchema,
  GetUserResSchema,
  GetUsersQuerySchema,
  UpdateUserBodySchema,
} from './user.model'
import { UpdateProfileResDTO } from '../profile/profile.dto'
export class GetUserResDTO extends createZodDto(GetUserResSchema) {}
export class GetUsersQueryDTO extends createZodDto(GetUsersQuerySchema) {}
export class GetUserParamsDTO extends createZodDto(GetUserParamsSchema) {}
export class CreateUserBodyDTO extends createZodDto(CreateUserBodySchema) {}
export class UpdateUserBodyDTO extends createZodDto(UpdateUserBodySchema) {}
export class CreateUserResDTO extends UpdateProfileResDTO {}
```

## File: backend/src/routes/user/user.error.ts
```typescript
import { ForbiddenException, UnprocessableEntityException } from '@nestjs/common'
export const UserAlreadyExistsException = new UnprocessableEntityException([
  {
    message: 'Error.UserAlreadyExists',
    path: 'email',
  },
])
export const CannotUpdateAdminUserException = new ForbiddenException('Error.CannotUpdateAdminUser')
export const CannotDeleteAdminUserException = new ForbiddenException('Error.CannotDeleteAdminUser')
export const CannotSetAdminRoleToUserException = new ForbiddenException('Error.CannotSetAdminRoleToUser')
export const RoleNotFoundException = new UnprocessableEntityException({
  message: 'Error.RoleNotFound',
  path: 'roleId',
})
export const CannotUpdateOrDeleteYourselfException = new ForbiddenException('Error.CannotUpdateOrDeleteYourself')
```

## File: backend/src/routes/user/user.model.ts
```typescript
import z from 'zod'
import { RoleSchema, UserSchema } from '../../shared/models/entity.model'
export const GetUserResSchema = z.object({
  data: z.array(
    UserSchema.omit({
      password: true,
      totpSecret: true,
    }).extend({
      role: RoleSchema.pick({
        id: true,
        name: true,
      }),
    }),
  ),
  totalItems: z.number(),
  page: z.number(),
  limit: z.number(),
  totalPages: z.number(),
})
export const GetUsersQuerySchema = z
  .object({
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().positive().default(10),
  })
  .strict()
export const GetUserParamsSchema = z
  .object({
    userId: z.coerce.number().int().positive(),
  })
  .strict()
export const CreateUserBodySchema = UserSchema.pick({
  email: true,
  name: true,
  phoneNumber: true,
  avatar: true,
  status: true,
  password: true,
  roleId: true,
}).strict()
export const UpdateUserBodySchema = CreateUserBodySchema
export type GetUserResType = z.infer<typeof GetUserResSchema>
export type GetUsersQueryType = z.infer<typeof GetUsersQuerySchema>
export type GetUserParamsType = z.infer<typeof GetUserParamsSchema>
export type CreateUserBodyType = z.infer<typeof CreateUserBodySchema>
export type UpdateUserBodyType = z.infer<typeof UpdateUserBodySchema>
```

## File: backend/src/routes/user/user.repo.ts
```typescript
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../shared/services/prisma.service'
import { CreateUserBodyType, GetUserResType, GetUsersQueryType } from './user.model'
import { UserType } from '../../shared/models/entity.model'
@Injectable()
export class UserRepo {
  constructor(private readonly prismaService: PrismaService) {}
  async list(pagination: GetUsersQueryType): Promise<GetUserResType> {
    const skip = (pagination.page - 1) * pagination.limit
    const take = pagination.limit
    const [totalItems, data] = await Promise.all([
      this.prismaService.user.count({
        where: {
          deletedAt: null,
        },
      }),
      this.prismaService.user.findMany({
        where: {
          deletedAt: null,
        },
        skip,
        take,
        include: {
          role: true,
        },
      }),
    ])
    return {
      data,
      totalItems,
      page: pagination.page,
      limit: pagination.limit,
      totalPages: Math.ceil(totalItems / pagination.limit),
    }
  }
  create({ createdById, data }: { createdById: number | null; data: CreateUserBodyType }) {
    return this.prismaService.user.create({
      data: {
        ...data,
        createdById,
      },
    })
  }
  delete({ id, deletedById, isHard }: { id: number; deletedById: number; isHard?: boolean }): Promise<UserType> {
    return isHard
      ? this.prismaService.user.delete({
          where: {
            id,
          },
        })
      : this.prismaService.user.update({
          where: {
            id,
            deletedAt: null,
          },
          data: {
            deletedAt: new Date(),
            deletedById,
          },
        })
  }
}
```

## File: backend/src/shared/decorators/active-role-permission.decorator.ts
```typescript
import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common'
import { REQUEST_ROLE_PERMISSIONS } from '../constants/auth.constant'
import { RolePermissionType } from '../models/entity.model'
export const ActiveRolePermission = createParamDecorator<keyof RolePermissionType | undefined>(
  (field, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    const rolePermissions: RolePermissionType | null = request[REQUEST_ROLE_PERMISSIONS]
    if (!rolePermissions) {
      throw new UnauthorizedException('Error.Unauthorized')
    }
    return field ? rolePermissions?.[field] : rolePermissions
  },
)
```

## File: backend/src/shared/decorators/active-user.decorator.ts
```typescript
import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { REQUEST_USER_KEY } from '../constants/auth.constant'
import { AccessTokenPayload } from '../types/jwt.type'
export const ActiveUser = createParamDecorator<keyof AccessTokenPayload | undefined>((field, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest()
  const user = request[REQUEST_USER_KEY]
  return field ? user?.[field] : user
})
```

## File: backend/src/shared/decorators/auth.decorator.ts
```typescript
import { SetMetadata } from '@nestjs/common'
import { AuthType, AuthTypeType, ConditionGuard, ConditionGuardType } from '../constants/auth.constant'
export const AUTH_TYPE_KEY = 'authType'
export type AuthMetadata = {
  authTypes: AuthTypeType[]
  options: { condition: ConditionGuardType }
}
export const Auth = (authTypes: AuthTypeType[], options?: { condition: ConditionGuardType }) => {
  return SetMetadata(AUTH_TYPE_KEY, {
    authTypes,
    options: {
      condition: options?.condition ?? ConditionGuard.Or,
    },
  })
}
export const IsPublic = () => Auth([AuthType.None])
```

## File: backend/src/shared/decorators/user-agent.decorator.ts
```typescript
import { createParamDecorator, ExecutionContext } from '@nestjs/common'
export const UserAgent = createParamDecorator((data: unknown, ctx: ExecutionContext): string => {
  const request = ctx.switchToHttp().getRequest()
  return request.headers['user-agent']
})
```

## File: backend/src/shared/dtos/auth.dto.ts
```typescript
import { createZodDto } from 'nestjs-zod'
import { EmptyBodySchema } from '../models/request.model'
export class EmptyBodyDTO extends createZodDto(EmptyBodySchema) {}
```

## File: backend/src/shared/dtos/response.dto.ts
```typescript
import { createZodDto } from 'nestjs-zod'
import { MessageResSchema } from '../../shared/models/response.model'
export class MessageResDTO extends createZodDto(MessageResSchema) {}
```

## File: backend/src/shared/error/error.ts
```typescript
import { UnprocessableEntityException } from '@nestjs/common'
export const InvalidPasswordException = new UnprocessableEntityException([
  {
    message: 'Error.InvalidPassword',
    path: 'password',
  },
])
```

## File: backend/src/shared/filters/http-exception.filter.ts
```typescript
import { ArgumentsHost, Catch, HttpException, Logger } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import { ZodSerializationException } from 'nestjs-zod'
import { ZodError } from 'zod'
@Catch(HttpException)
export class HttpExceptionFilter extends BaseExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name)
  override catch(exception: HttpException, host: ArgumentsHost) {
    if (exception instanceof ZodSerializationException) {
      const zodError = (exception as ZodSerializationException).getZodError()
      if (zodError instanceof ZodError) {
        this.logger.error(`ZodSerializationException: ${zodError.message}`)
      }
    }
    super.catch(exception, host)
  }
}
```

## File: backend/src/shared/guards/api-key.guard.ts
```typescript
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common'
import { envConfig } from '../config/validate'
@Injectable()
export class APIKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest()
    const rawKey = request.headers['x-api-key']
    const apiKey = typeof rawKey === 'string' ? rawKey.trim() : undefined
    if (!apiKey) {
      throw new UnauthorizedException('API key is required')
    }
    if (apiKey !== envConfig.SECRET_KEY) {
      throw new UnauthorizedException('Invalid API key')
    }
    return true
  }
}
```

## File: backend/src/shared/helper/error.ts
```typescript
import { NotFoundException } from '@nestjs/common'
import { Prisma } from '../../generated/prisma/client'
export function isUniqueConstraintPrismaError(error: any): error is Prisma.PrismaClientKnownRequestError {
  return error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002'
}
export function isNotFoundPrismaError(error: any): error is Prisma.PrismaClientKnownRequestError {
  return error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025'
}
export function isForeignKeyConstraintPrismaError(error: any): error is Prisma.PrismaClientKnownRequestError {
  return error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2003'
}
export const NotFoundRecordException = new NotFoundException('Error.NotFoundRecord')
```

## File: backend/src/shared/helper/generate-otp.ts
```typescript
import { randomInt } from 'crypto'
export const generateOTP = () => {
  return String(randomInt(100000, 1000000))
}
```

## File: backend/src/shared/helper/randome-name-file.ts
```typescript
import path from 'path'
import { v4 as uuidv4 } from 'uuid'
export const generateRandomFilename = (filename: string) => {
  const ext = path.extname(filename)
  return `${uuidv4()}${ext}`
}
```

## File: backend/src/shared/models/request.model.ts
```typescript
import z from 'zod'
export const EmptyBodySchema = z.object({})
export type EmptyBodyType = z.infer<typeof EmptyBodySchema>
```

## File: backend/src/shared/models/response.model.ts
```typescript
import z from 'zod'
export const MessageResSchema = z.object({
  message: z.string(),
})
export type MessageResType = z.infer<typeof MessageResSchema>
```

## File: backend/src/shared/pipes/custom-zod-validation.pipes.ts
```typescript
import { BadRequestException } from '@nestjs/common'
import { createZodValidationPipe, ZodValidationPipe } from 'nestjs-zod'
import { ZodError } from 'zod'
export const MyZodValidationPipe: typeof ZodValidationPipe = createZodValidationPipe({
  createValidationException: (error: unknown) => {
    if (error instanceof ZodError) {
      const issues = error.issues.map((e) => ({
        ...e,
        path: e.path.join('.'),
      }))
      return new BadRequestException({
        message: 'Validation failed',
        errors: issues,
      })
    }
    return new BadRequestException('Ooops')
  },
})
```

## File: backend/src/shared/repositories/shared-role.repo.ts
```typescript
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../services/prisma.service'
import { RoleType } from '../models/entity.model'
import { RoleName } from '../constants/role.constant'
@Injectable()
export class SharedRoleRepository {
  private clientRoleId: null | number = null
  private adminRoleId: null | number = null
  constructor(private readonly prisma: PrismaService) {}
  private async getRole(roleName: string) {
    const role = await this.prisma.$queryRaw<
      RoleType[]
    >`SELECT * FROM "Role" WHERE name = ${roleName} AND "deletedAt" IS NULL LIMIT 1`
    if (role.length === 0) {
      throw new Error('Client role not found!')
    }
    return role[0]
  }
  async getClientRoleId() {
    if (this.clientRoleId) return this.clientRoleId
    const role = await this.getRole(RoleName.CLIENT)
    this.clientRoleId = role.id
    return this.clientRoleId
  }
  async getAdminRoleId() {
    if (this.adminRoleId) return this.adminRoleId
    const role = await this.getRole(RoleName.ADMIN)
    this.adminRoleId = role.id
    return this.adminRoleId
  }
}
```

## File: backend/src/shared/services/email.service.ts
```typescript
import { Injectable } from '@nestjs/common'
import * as React from 'react'
import { Resend } from 'resend'
import { envConfig } from '../config/validate'
import AWSVerifyEmail from '../../emails/aws-verify-email'
@Injectable()
export class EmailService {
  private resend: Resend
  constructor() {
    this.resend = new Resend(envConfig.RESEND_API_KEY)
  }
  async sendOTP(payload: { email: string; code: string }) {
    return await this.resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [`${payload.email}`],
      subject: 'Verify email',
      react: React.createElement(AWSVerifyEmail, { verificationCode: payload.code }),
    })
  }
}
```

## File: backend/src/shared/services/prisma.service.ts
```typescript
import { Injectable } from '@nestjs/common'
import { PrismaClient } from '../../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { envConfig } from '../config/validate'
@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaPg({ connectionString: envConfig.DATABASE_URL })
    super({ adapter })
  }
}
```

## File: backend/src/shared/services/token.service.ts
```typescript
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import {
  AccessTokenPayload,
  AccessTokenPayloadCreate,
  RefreshTokenPayload,
  RefreshTokenPayloadCreate,
} from '../types/jwt.type'
import { v4 as uuidv4 } from 'uuid'
import { envConfig } from '../config/validate'
import { StringValue } from 'ms'
@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}
  async signAccessToken(payload: AccessTokenPayloadCreate): Promise<string> {
    return await this.jwtService.signAsync(
      { ...payload, uuid: uuidv4() },
      { secret: envConfig.ACCESS_TOKEN_SECRET, expiresIn: envConfig.ACCESS_TOKEN_EXPIRES_IN as StringValue },
    )
  }
  async signRefreshToken(payload: RefreshTokenPayloadCreate): Promise<string> {
    return await this.jwtService.signAsync(
      { ...payload, uuid: uuidv4() },
      { secret: envConfig.REFRESH_TOKEN_SECRET, expiresIn: envConfig.REFRESH_TOKEN_EXPIRES_IN as StringValue },
    )
  }
  async verifyAccessToken(accessToken: string): Promise<AccessTokenPayload> {
    return await this.jwtService.verifyAsync(accessToken, { secret: envConfig.ACCESS_TOKEN_SECRET })
  }
  async verifyRefreshToken(refreshToken: string): Promise<RefreshTokenPayload> {
    return await this.jwtService.verifyAsync(refreshToken, { secret: envConfig.REFRESH_TOKEN_SECRET })
  }
}
```

## File: backend/src/shared/types/jwt.type.ts
```typescript
export interface AccessTokenPayloadCreate {
  userId: number
  deviceId: number
  roleId: number
  roleName: string
}
export interface AccessTokenPayload extends AccessTokenPayloadCreate {
  iat: number
  exp: number
}
export interface RefreshTokenPayloadCreate {
  userId: number
}
export interface RefreshTokenPayload extends RefreshTokenPayloadCreate {
  iat: number
  exp: number
}
```

## File: backend/webpack.config.js
```javascript
const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');
module.exports = {
  output: {
    path: join(__dirname, '../dist/backend'),
    clean: true,
    ...(process.env.NODE_ENV !== 'production' && {
      devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    }),
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: true,
      sourceMap: true,
    }),
  ],
};
```

## File: docker-compose.yml
```yaml
services:
  postgres:
    container_name: postgres
    image: postgres:16
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: 123
      POSTGRES_DB: ecommerce_monorepo
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
  pgadmin:
    container_name: pgadmin
    image: dpage/pgadmin4
    restart: always
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@admin.com
      PGADMIN_DEFAULT_PASSWORD: 123
    ports:
      - "8080:80"
    depends_on:
      - postgres
    volumes:
      - pgadmin_data:/var/lib/pgadmin
  backend:
    container_name: backend
    build:
      context: .
      dockerfile: backend/Dockerfile
    ports:
      - "3000:3000"
    depends_on:
      - postgres
    env_file:
      - backend/.env
    environment:
      DATABASE_URL: postgresql://postgres:123@postgres:5432/ecommerce_monorepo
      PORT: 3000
  frontend:
    container_name: frontend
    build:
      context: .
      dockerfile: frontend/Dockerfile
    ports:
      - "3001:3001"
    depends_on:
      - backend
volumes:
  pgdata:
  pgadmin_data:
```

## File: jest.config.ts
```typescript
import type { Config } from 'jest';
import { getJestProjectsAsync } from '@nx/jest';
export default async (): Promise<Config> => ({
  projects: await getJestProjectsAsync(),
});
```

## File: jest.preset.js
```javascript
const nxPreset = require('@nx/jest/preset').default;
module.exports = { ...nxPreset };
```

## File: opencode.json
```json
{
  "mcp": {
    "nx-mcp": {
      "type": "local",
      "command": ["npx", "nx", "mcp"],
      "enabled": true
    }
  }
}
```

## File: packages/.gitkeep
```

```

## File: pnpm-workspace.yaml
```yaml
packages:
  - 'packages/*'
  - 'backend'
  - 'backend-e2e'
  - 'frontend'
  - 'frontend-e2e'
allowBuilds:
  '@nestjs/core': true
  '@parcel/watcher': true
  '@prisma/engines': true
  '@swc/core': true
  less: true
  nx: true
  prisma: true
  sharp: true
  unrs-resolver: true
```

## File: .gitignore
```
# See https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files for more about ignoring files.

# compiled output
dist
tmp
out-tsc

# dependencies
node_modules

# IDEs and editors
/.idea
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# IDE - VSCode
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json

# misc
/.sass-cache
/connect.lock
/coverage
/libpeerconnection.log
npm-debug.log
yarn-error.log
testem.log
/typings

# System Files
.DS_Store
Thumbs.db

.nx/cache
.nx/workspace-data
.cursor/rules/nx-rules.mdc
.github/instructions/nx.instructions.md

.claude/worktrees
.claude/settings.local.json
.nx/polygraph
.nx/self-healing

# Next.js
.next
out

.env
.env.*
!.env.example
```

## File: .prettierrc
```
{
  "singleQuote": true,
  "trailingComma": "all",
  "semi": false,
  "arrowParens": "always",
  "tabWidth": 2,
  "endOfLine": "auto",
  "useTabs": false,
  "printWidth": 120
}
```

## File: backend/jest.config.cts
```typescript
module.exports = {
  displayName: 'backend',
  preset: '../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../coverage/backend',
  setupFiles: ['reflect-metadata'],
};
```

## File: backend/project.json
```json
{
  "name": "backend",
  "$schema": "../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "backend/src",
  "projectType": "application",
  "tags": [],
  "targets": {
    "build": {
      "executor": "nx:run-commands",
      "options": {
        "command": "webpack-cli build",
        "args": ["--node-env=production"],
        "cwd": "backend"
      },
      "configurations": {
        "development": {
          "args": ["--node-env=development"]
        }
      }
    },
    "prune-lockfile": {
      "dependsOn": ["build"],
      "cache": true,
      "executor": "@nx/js:prune-lockfile",
      "outputs": [
        "{workspaceRoot}/dist/backend/package.json",
        "{workspaceRoot}/dist/backend/pnpm-lock.yaml"
      ],
      "options": {
        "buildTarget": "build"
      }
    },
    "copy-workspace-modules": {
      "dependsOn": ["build"],
      "cache": true,
      "outputs": ["{workspaceRoot}/dist/backend/workspace_modules"],
      "executor": "@nx/js:copy-workspace-modules",
      "options": {
        "buildTarget": "build"
      }
    },
    "prune": {
      "dependsOn": ["prune-lockfile", "copy-workspace-modules"],
      "executor": "nx:noop"
    },
    "serve": {
      "continuous": true,
      "executor": "@nx/js:node",
      "defaultConfiguration": "development",
      "dependsOn": ["build"],
      "options": {
        "buildTarget": "backend:build",
        "runBuildTargetDependencies": false
      },
      "configurations": {
        "development": {
          "buildTarget": "backend:build:development"
        },
        "production": {
          "buildTarget": "backend:build:production"
        }
      }
    },
    "test": {
      "options": {
        "passWithNoTests": true
      }
    },
    "seed": {
      "executor": "nx:run-commands",
      "options": {
        "command": "pnpm run seed",
        "cwd": "backend"
      }
    }
  }
}
```

## File: backend/src/main.ts
```typescript
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const port = process.env.PORT || 3000
  await app.listen(port)
  Logger.log(`🚀 Application is running on: http://localhost:${port}`)
}
bootstrap()
```

## File: backend/src/routes/language/error.model.ts
```typescript
import { UnprocessableEntityException } from '@nestjs/common'
export const LanguageAlreadyExistsException = new UnprocessableEntityException({
  message: 'Error.LanguageAlreadyExists',
  path: 'language',
})
export const LanguageValidationNotEmptyException = new UnprocessableEntityException({
  message: 'Error.LanguageValidationNotEmpty',
  path: 'language',
})
export const LanguageNotFoundRecordException = new UnprocessableEntityException({
  message: 'Error.LanguageNotFoundRecord',
  path: 'language',
})
```

## File: backend/src/routes/language/language.service.ts
```typescript
import { Injectable } from '@nestjs/common'
import { LanguageRepo } from './language.repo'
import {
  LanguageAlreadyExistsException,
  LanguageNotFoundRecordException,
  LanguageValidationNotEmptyException,
} from './error.model'
import { CreateLanguageBodyType, UpdateLanguageBodyType } from './language.model'
import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/client'
@Injectable()
export class LanguageService {
  constructor(private readonly languageRepo: LanguageRepo) {}
  async findAll() {
    const data = await this.languageRepo.findAll()
    return {
      data,
      totalItems: data.length,
    }
  }
  async findById(id: string) {
    const language = this.languageRepo.findById(id)
    if (!language) {
      throw LanguageNotFoundRecordException
    }
    return language
  }
  async create({ data, createdById }: { data: CreateLanguageBodyType; createdById: number }) {
    try {
      return await this.languageRepo.create({
        createdById,
        data,
      })
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw LanguageAlreadyExistsException
      }
      throw error
    }
  }
  async update({ id, data, updatedById }: { id: string; data: UpdateLanguageBodyType; updatedById: number }) {
    try {
      return await this.languageRepo.update({
        id,
        data,
        updatedById,
      })
    } catch (error) {
      if (error instanceof PrismaClientValidationError) {
        throw LanguageValidationNotEmptyException
      }
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw LanguageValidationNotEmptyException
      }
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
        throw LanguageNotFoundRecordException
      }
      throw error
    }
  }
  async delete(id: string) {
    try {
      await this.languageRepo.delete(id, true)
      return {
        message: 'Delete successfully',
      }
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
        throw LanguageNotFoundRecordException
      }
      throw error
    }
  }
}
```

## File: backend/src/routes/media/media.controller.ts
```typescript
import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import 'multer'
@Controller('media')
export class MediaController {
  constructor() {}
  @Post('image/upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
          new FileTypeValidator({
            fileType: /^image\/(jpeg|jpg|png|webp)$/,
          }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    console.log(file)
  }
}
```

## File: backend/src/routes/media/media.module.ts
```typescript
import { Module } from '@nestjs/common'
import { MediaController } from './media.controller'
import path from 'path'
import { MulterModule } from '@nestjs/platform-express'
import { generateRandomFilename } from '../../shared/helper/randome-name-file'
import multer from 'multer'
import { envConfig } from '../../shared/config/validate'
import { existsSync, mkdirSync } from 'fs'
const UPLOAD_DIR = path.resolve(process.cwd(), envConfig.UPLOAD_DIR)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOAD_DIR)
  },
  filename: function (req, file, cb) {
    const newFileName = generateRandomFilename(file.originalname)
    cb(null, newFileName)
  },
})
@Module({
  controllers: [MediaController],
  providers: [],
  imports: [
    MulterModule.register({
      storage,
    }),
  ],
})
export class UploadModule {
  constructor() {
    if (!existsSync(UPLOAD_DIR)) {
      mkdirSync(UPLOAD_DIR, { recursive: true })
    }
  }
}
```

## File: backend/src/routes/permission/permission.repo.ts
```typescript
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../shared/services/prisma.service'
import {
  CreatePermissionBodyType,
  GetPermissionsQueryType,
  GetPermissionsResType,
  UpdatePermissionBodyType,
} from './permission.model'
import { PermissionType } from '../../shared/models/entity.model'
@Injectable()
export class PermissionRepo {
  constructor(private readonly prisma: PrismaService) {}
  async list(pagination: GetPermissionsQueryType): Promise<GetPermissionsResType> {
    const skip = (pagination.page - 1) * pagination.limit
    const take = pagination.limit
    const [totalItems, data] = await Promise.all([
      this.prisma.permission.count({
        where: {
          deletedAt: null,
        },
      }),
      this.prisma.permission.findMany({
        where: {
          deletedAt: null,
        },
        skip,
        take,
      }),
    ])
    return {
      data,
      totalItems,
      page: pagination.page,
      limit: pagination.limit,
      totalPages: Math.ceil(totalItems / pagination.limit),
    }
  }
  async findById(id: number): Promise<PermissionType | null> {
    return this.prisma.permission.findUnique({
      where: {
        deletedAt: null,
        id,
      },
    })
  }
  async create({
    createdById,
    data,
  }: {
    createdById: number | null
    data: CreatePermissionBodyType
  }): Promise<PermissionType> {
    return this.prisma.permission.create({
      data: {
        ...data,
        createdById,
      },
    })
  }
  async update({ data, id, updatedById }: { data: UpdatePermissionBodyType; id: number; updatedById: number }) {
    return this.prisma.permission.update({
      where: {
        id,
        deletedAt: null,
      },
      data: {
        ...data,
        updatedById,
      },
    })
  }
  async delete({ permissionId, userId, isHard }: { permissionId: number; userId: number; isHard?: boolean }) {
    return isHard
      ? this.prisma.permission.delete({
          where: {
            id: permissionId,
          },
        })
      : this.prisma.permission.update({
          where: {
            id: userId,
            deletedAt: null,
          },
          data: {
            deletedAt: new Date(),
            deletedById: userId,
          },
        })
  }
}
```

## File: backend/src/routes/profile/profile.controller.ts
```typescript
import { Body, Controller, Get, Put } from '@nestjs/common'
import { ZodSerializerDto } from 'nestjs-zod'
import { ActiveUser } from '../../shared/decorators/active-user.decorator'
import { MessageResDTO } from '../../shared/dtos/response.dto'
import { ChangePasswordBodyDTO, GetUserProfileResDTO, UpdateMeBodyDTO, UpdateProfileResDTO } from './profile.dto'
import { ProfileService } from './profile.service'
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  @Get()
  @ZodSerializerDto(GetUserProfileResDTO)
  getProfile(@ActiveUser('userId') userId: number) {
    return this.profileService.getProfile(userId)
  }
  @Put()
  @ZodSerializerDto(UpdateProfileResDTO)
  updateProfile(@Body() body: UpdateMeBodyDTO, @ActiveUser('userId') userId: number) {
    return this.profileService.updateProfile({
      userId,
      body,
    })
  }
  @Put('change-password')
  @ZodSerializerDto(MessageResDTO)
  changePassword(@Body() body: ChangePasswordBodyDTO, @ActiveUser('userId') userId: number) {
    return this.profileService.changePassword({
      userId,
      body,
    })
  }
}
```

## File: backend/src/routes/profile/profile.service.ts
```typescript
import { Injectable } from '@nestjs/common'
import { SharedUserRepository } from '../../shared/repositories/shared-user.repo'
import { HashingService } from '../../shared/services/hashing.service'
import { ChangePasswordBodyType, UpdateMeBodyType } from './profile.model'
import { NotFoundProfileException } from './profile.error'
import { InvalidPasswordException } from '../../shared/error/error'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client'
@Injectable()
export class ProfileService {
  constructor(
    private readonly sharedUserRepository: SharedUserRepository,
    private readonly hashingService: HashingService,
  ) {}
  async getProfile(userId: number) {
    const user = await this.sharedUserRepository.findUniqueIncludeRolePermissions({
      id: userId,
    })
    if (!user) {
      throw NotFoundProfileException
    }
    return user
  }
  async updateProfile({ userId, body }: { userId: number; body: UpdateMeBodyType }) {
    try {
      return await this.sharedUserRepository.update(
        { id: userId },
        {
          ...body,
          updatedById: userId,
        },
      )
    } catch (error: unknown) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
        throw NotFoundProfileException
      }
      throw error
    }
  }
  async changePassword({ userId, body }: { userId: number; body: Omit<ChangePasswordBodyType, 'confirmNewPassword'> }) {
    const { password, newPassword } = body
    const user = await this.sharedUserRepository.findUnique({
      id: userId,
    })
    if (!user) {
      throw NotFoundProfileException
    }
    const isPasswordMatch = await this.hashingService.verify(password, user.password)
    if (!isPasswordMatch) {
      throw InvalidPasswordException
    }
    const hashedPassword = await this.hashingService.hash(newPassword)
    await this.sharedUserRepository.update(
      { id: userId },
      {
        password: hashedPassword,
        updatedById: userId,
      },
    )
    return {
      message: 'Password changed successfully!',
    }
  }
}
```

## File: backend/src/routes/role/role.error.ts
```typescript
import { ForbiddenException, UnprocessableEntityException } from '@nestjs/common'
export const RoleNotFoundException = new UnprocessableEntityException([{ message: 'Error.RoleNotFound', path: 'role' }])
export const RoleAlreadyExistException = new UnprocessableEntityException([
  { message: 'Error.RoleAlreadyExist', path: 'role' },
])
export const RoleValidationNotEmptyException = new UnprocessableEntityException([
  { message: 'Error.RoleValidationNotEmpty', path: 'role' },
])
export const NotFoundRoleException = new UnprocessableEntityException([{ message: 'Error.NotFoundRole', path: 'role' }])
export const ProhibitedActionOnBaseRoleException = new ForbiddenException([
  { message: 'Error.ProhibitedActionOnBaseRole', path: 'role' },
])
```

## File: backend/src/routes/user/user.controller.ts
```typescript
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ZodSerializerDto } from 'nestjs-zod'
import { ActiveRolePermission } from '../../shared/decorators/active-role-permission.decorator'
import { ActiveUser } from '../../shared/decorators/active-user.decorator'
import { MessageResDTO } from '../../shared/dtos/response.dto'
import { GetUserProfileResDTO, UpdateProfileResDTO } from '../profile/profile.dto'
import {
  CreateUserBodyDTO,
  CreateUserResDTO,
  GetUserParamsDTO,
  GetUserResDTO,
  GetUsersQueryDTO,
  UpdateUserBodyDTO,
} from './user.dto'
import { UsersService } from './user.service'
@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  @ZodSerializerDto(GetUserResDTO)
  list(@Query() query: GetUsersQueryDTO) {
    return this.userService.list({
      page: query.page,
      limit: query.limit,
    })
  }
  @Get(':userId')
  @ZodSerializerDto(GetUserProfileResDTO)
  findById(@Param() params: GetUserParamsDTO) {
    return this.userService.findById(params.userId)
  }
  @Post()
  @ZodSerializerDto(CreateUserResDTO)
  create(
    @Body() body: CreateUserBodyDTO,
    @ActiveUser('userId') userId: number,
    @ActiveRolePermission('name') roleName: string,
  ) {
    return this.userService.create({
      data: body,
      createdByRoleName: roleName,
      createdById: userId,
    })
  }
  @Put(':userId')
  @ZodSerializerDto(UpdateProfileResDTO)
  update(
    @Body() body: UpdateUserBodyDTO,
    @Param() params: GetUserParamsDTO,
    @ActiveUser('userId') userId: number,
    @ActiveRolePermission('name') roleName: string,
  ) {
    return this.userService.update({
      data: body,
      id: params.userId,
      updatedById: userId,
      updatedByRoleName: roleName,
    })
  }
  @Delete(':userId')
  @ZodSerializerDto(MessageResDTO)
  delete(
    @Param() params: GetUserParamsDTO,
    @ActiveUser('userId') userId: number,
    @ActiveRolePermission('name') roleName: string,
  ) {
    return this.userService.delete({
      id: params.userId,
      deletedById: userId,
      deletedByRoleName: roleName,
    })
  }
}
```

## File: backend/src/routes/user/user.module.ts
```typescript
import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserRepo } from './user.repo'
import { UsersService } from './user.service'
import { SharedModule } from '../../shared/shared.module'
@Module({
  controllers: [UserController],
  providers: [UsersService, UserRepo],
  imports: [SharedModule],
})
export class UserModule {}
```

## File: backend/src/routes/user/user.service.ts
```typescript
import { ForbiddenException, Injectable } from '@nestjs/common'
import { UserRepo } from './user.repo'
import { CreateUserBodyType, GetUsersQueryType, UpdateUserBodyType } from './user.model'
import { SharedUserRepository } from '../../shared/repositories/shared-user.repo'
import { RoleName } from '../../shared/constants/role.constant'
import { SharedRoleRepository } from '../../shared/repositories/shared-role.repo'
import {
  isForeignKeyConstraintPrismaError,
  isNotFoundPrismaError,
  isUniqueConstraintPrismaError,
  NotFoundRecordException,
} from '../../shared/helper/error'
import { HashingService } from '../../shared/services/hashing.service'
import { CannotUpdateOrDeleteYourselfException, RoleNotFoundException, UserAlreadyExistsException } from './user.error'
@Injectable()
export class UsersService {
  constructor(
    private readonly userRepo: UserRepo,
    private readonly sharedUserRepository: SharedUserRepository,
    private readonly sharedRoleRepository: SharedRoleRepository,
    private readonly hashingService: HashingService,
  ) {}
  private async verifyRole({ roleNameAgent, roleIdTarget }: { roleNameAgent: string; roleIdTarget: number }) {
    if (roleNameAgent === RoleName.ADMIN) {
      return true
    } else {
      const adminRoleId = await this.sharedRoleRepository.getAdminRoleId()
      if (roleIdTarget === adminRoleId) {
        throw new ForbiddenException()
      }
    }
    return true
  }
  list(pagination: GetUsersQueryType) {
    return this.userRepo.list(pagination)
  }
  async findById(id: number) {
    const user = await this.sharedUserRepository.findUniqueIncludeRolePermissions({
      id,
    })
    if (!user) {
      throw NotFoundRecordException
    }
    return user
  }
  async create({
    data,
    createdById,
    createdByRoleName,
  }: {
    data: CreateUserBodyType
    createdById: number
    createdByRoleName: string
  }) {
    try {
      await this.verifyRole({
        roleNameAgent: createdByRoleName,
        roleIdTarget: data.roleId,
      })
      const hashedPassword = await this.hashingService.hash(data.password)
      const user = await this.userRepo.create({
        createdById,
        data: {
          ...data,
          password: hashedPassword,
        },
      })
      return user
    } catch (error) {
      if (isForeignKeyConstraintPrismaError(error)) {
        throw RoleNotFoundException
      }
      if (isUniqueConstraintPrismaError(error)) {
        throw UserAlreadyExistsException
      }
      throw error
    }
  }
  async update({
    id,
    data,
    updatedById,
    updatedByRoleName,
  }: {
    id: number
    data: UpdateUserBodyType
    updatedById: number
    updatedByRoleName: string
  }) {
    try {
      if (id === updatedById) {
        throw CannotUpdateOrDeleteYourselfException
      }
      const currentUser = await this.sharedUserRepository.findUnique({
        id,
      })
      if (!currentUser) {
        throw NotFoundRecordException
      }
      const roleIdTarget = currentUser.roleId
      await this.verifyRole({
        roleNameAgent: updatedByRoleName,
        roleIdTarget,
      })
      const updatedUser = await this.sharedUserRepository.update(
        { id },
        {
          ...data,
          updatedById,
        },
      )
      return updatedUser
    } catch (error) {
      if (isNotFoundPrismaError(error)) {
        throw NotFoundRecordException
      }
      if (isUniqueConstraintPrismaError(error)) {
        throw UserAlreadyExistsException
      }
      if (isForeignKeyConstraintPrismaError(error)) {
        throw RoleNotFoundException
      }
      throw error
    }
  }
  async delete({ id, deletedById, deletedByRoleName }: { id: number; deletedById: number; deletedByRoleName: string }) {
    try {
      if (id === deletedById) {
        throw CannotUpdateOrDeleteYourselfException
      }
      const currentUser = await this.sharedUserRepository.findUnique({
        id,
      })
      if (!currentUser) {
        throw NotFoundRecordException
      }
      const roleIdTarget = currentUser.roleId
      await this.verifyRole({
        roleNameAgent: deletedByRoleName,
        roleIdTarget,
      })
      await this.userRepo.delete({
        id,
        deletedById,
      })
      return {
        message: 'Delete successfully',
      }
    } catch (error) {
      if (isNotFoundPrismaError(error)) {
        throw NotFoundRecordException
      }
      throw error
    }
  }
}
```

## File: backend/src/shared/constants/auth.constant.ts
```typescript
export const UserStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  BLOCKED: 'BLOCKED',
} as const
export const TypeOfVerificationCode = {
  REGISTER: 'REGISTER',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  LOGIN: 'LOGIN',
  DISABLE_2FA: 'DISABLE_2FA',
} as const
export type TypeOfVerificationCode = (typeof TypeOfVerificationCode)[keyof typeof TypeOfVerificationCode]
export const REQUEST_USER_KEY = 'user'
export const REQUEST_ROLE_PERMISSIONS = 'rolePermissions'
export const AuthType = {
  Bearer: 'Bearer',
  None: 'None',
  APIKey: 'ApiKey',
} as const
export type AuthTypeType = (typeof AuthType)[keyof typeof AuthType]
export const ConditionGuard = {
  And: 'and',
  Or: 'or',
} as const
export type ConditionGuardType = (typeof ConditionGuard)[keyof typeof ConditionGuard]
```

## File: backend/src/shared/constants/role.constant.ts
```typescript
export const RoleName = {
  ADMIN: 'ADMIN',
  CLIENT: 'CLIENT',
  SELLER: 'SELLER',
} as const
export const HTTPMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
  OPTIONS: 'OPTIONS',
  HEAD: 'HEAD',
} as const
```

## File: backend/src/shared/guards/authentication.guard.ts
```typescript
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, HttpException } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AUTH_TYPE_KEY, AuthMetadata } from '../decorators/auth.decorator'
import { AuthType, AuthTypeType, ConditionGuard } from '../constants/auth.constant'
import { AccessTokenGuard } from './access-token.guard'
import { APIKeyGuard } from './api-key.guard'
const DEFAULT_AUTH_METADATA: AuthMetadata = {
  authTypes: [AuthType.Bearer],
  options: {
    condition: ConditionGuard.And,
  },
}
@Injectable()
export class AuthenticationGuard implements CanActivate {
  private readonly guardMap: Record<AuthTypeType, CanActivate | null>
  constructor(
    private readonly reflector: Reflector,
    private readonly accessTokenGuard: AccessTokenGuard,
    private readonly apiKeyGuard: APIKeyGuard,
  ) {
    this.guardMap = {
      [AuthType.APIKey]: this.apiKeyGuard,
      [AuthType.Bearer]: this.accessTokenGuard,
      [AuthType.None]: null,
    }
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const metadata = this.getAuthTypeValue(context)
    const { authTypes, options } = metadata
    if (authTypes.includes(AuthType.None)) {
      return true
    }
    const guards = authTypes
      .filter((type) => type !== AuthType.None)
      .map((type) => this.guardMap[type])
      .filter((g) => g !== null)
    if (guards.length === 0) {
      throw new UnauthorizedException()
    }
    return options.condition === ConditionGuard.And
      ? this.handleAndCondition(guards, context)
      : this.handleOrCondition(guards, context)
  }
  private getAuthTypeValue(context: ExecutionContext): AuthMetadata {
    return (
      this.reflector.getAllAndOverride<AuthMetadata>(AUTH_TYPE_KEY, [context.getHandler(), context.getClass()]) ??
      DEFAULT_AUTH_METADATA
    )
  }
  private async handleOrCondition(guards: CanActivate[], context: ExecutionContext): Promise<boolean> {
    let lastError: any = null
    for (const guard of guards) {
      try {
        if (await guard.canActivate(context)) {
          return true
        }
      } catch (error) {
        lastError = error
      }
    }
    if (lastError instanceof HttpException) {
      throw lastError
    }
    throw new UnauthorizedException()
  }
  private async handleAndCondition(guards: CanActivate[], context: ExecutionContext): Promise<boolean> {
    for (const guard of guards) {
      try {
        if (!(await guard.canActivate(context))) {
          throw new UnauthorizedException()
        }
      } catch (error) {
        if (error instanceof HttpException) {
          throw error
        }
        throw new UnauthorizedException()
      }
    }
    return true
  }
}
```

## File: backend/src/shared/models/entity.model.ts
```typescript
import z from 'zod'
import { UserStatus } from '../constants/auth.constant'
import { HTTPMethod } from '../constants/role.constant'
export const UserSchema = z.object({
  id: z.number(),
  email: z.email('Error.EmailInvalid'),
  name: z.string({ error: 'Error.FieldNotEmpty' }).min(1, 'Error.FieldNotEmpty').max(100, 'Error.FieldTooLong'),
  password: z.string({ error: 'Error.FieldNotEmpty' }).min(6, 'Error.PasswordTooShort').max(100, 'Error.FieldTooLong'),
  phoneNumber: z
    .string({ error: 'Error.FieldNotEmpty' })
    .min(9, 'Error.PhoneNumberTooShort')
    .max(15, 'Error.PhoneNumberTooLong'),
  avatar: z.string().nullable(),
  totpSecret: z.string().nullable(),
  status: z.enum(UserStatus, { error: 'Error.InvalidUserStatus' }),
  roleId: z.number({ error: 'Error.FieldNotEmpty' }).positive('Error.InvalidRoleId'),
  createdById: z.number().nullable(),
  updatedById: z.number().nullable(),
  deletedById: z.number().nullable(),
  deletedAt: z.date().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
export const RoleSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  isActive: z.boolean(),
  deletedAt: z.date().nullable(),
  deletedById: z.number().nullable(),
  createdAt: z.date().nullable(),
  createdById: z.number().nullable(),
  updatedAt: z.date().nullable(),
  updatedById: z.number().nullable(),
})
export const PermissionSchema = z.object({
  id: z.number(),
  name: z.string().max(500),
  description: z.string(),
  module: z.string().max(500),
  path: z.string().max(1000),
  method: z.enum(HTTPMethod),
  createdById: z.number().nullable(),
  updatedById: z.number().nullable(),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
  deletedById: z.number().nullable(),
  deletedAt: z.date().nullable(),
})
export const RolePermissionSchema = RoleSchema.extend({
  permissions: z.array(PermissionSchema),
})
export type UserType = z.infer<typeof UserSchema>
export type RoleType = z.infer<typeof RoleSchema>
export type PermissionType = z.infer<typeof PermissionSchema>
export type RolePermissionType = z.infer<typeof RolePermissionSchema>
```

## File: backend/src/shared/repositories/shared-user.repo.ts
```typescript
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../services/prisma.service'
import { PermissionType, RoleType, UserType } from '../models/entity.model'
export type WhereUniqueUserType = { id: number } | { email: string }
type UserIncludeRolePermissionsType = UserType & { role: RoleType & { permissions: PermissionType[] } }
@Injectable()
export class SharedUserRepository {
  constructor(private readonly prisma: PrismaService) {}
  findUnique(where: WhereUniqueUserType): Promise<UserType | null> {
    return this.prisma.user.findFirst({
      where,
    })
  }
  findUniqueIncludeRolePermissions(where: WhereUniqueUserType): Promise<UserIncludeRolePermissionsType | null> {
    return this.prisma.user.findFirst({
      where,
      include: {
        role: {
          include: {
            permissions: {
              where: {
                deletedAt: null,
              },
            },
          },
        },
      },
    })
  }
  update(where: { id: number }, data: Partial<UserType>): Promise<UserType | null> {
    return this.prisma.user.update({
      where: {
        ...where,
        deletedAt: null,
      },
      data,
    })
  }
}
```

## File: backend/src/shared/services/2fa.service.ts
```typescript
import { Injectable } from '@nestjs/common'
import * as OTPAuth from 'otpauth'
import { envConfig } from '../config/validate'
@Injectable()
export class TwoFactorAuthService {
  private createTOTP(email: string, secret?: string): OTPAuth.TOTP {
    return new OTPAuth.TOTP({
      issuer: envConfig.APP_NAME,
      label: email,
      algorithm: 'SHA1',
      digits: 6,
      period: 30,
      secret: secret || new OTPAuth.Secret(),
    })
  }
  generateTOTP(email: string): {
    secret: string
    uri: string
  } {
    const totp = this.createTOTP(email)
    return {
      secret: totp.secret.base32,
      uri: totp.toString(),
    }
  }
  verifyTOTP({ email, token, secret }: { email: string; token: string; secret: string }): boolean {
    const totp = this.createTOTP(email, secret)
    const delta = totp.validate({ token, window: 1 })
    return delta !== null
  }
}
```

## File: backend/src/shared/services/hashing.service.ts
```typescript
import * as bcrypt from 'bcryptjs'
export class HashingService {
  private readonly SALT_ROUNDS = 10
  async hash(value: string): Promise<string> {
    return await bcrypt.hash(value, this.SALT_ROUNDS)
  }
  async verify(value: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(value, hash)
  }
}
```

## File: backend/tsconfig.json
```json
{
  "extends": "../tsconfig.base.json",
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ],
  "compilerOptions": {
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "useDefineForClassFields": false
  }
}
```

## File: tsconfig.base.json
```json
{
  "compilerOptions": {
    "composite": true,
    "declarationMap": true,
    "emitDeclarationOnly": true,
    "importHelpers": true,
    "isolatedModules": true,
    "lib": ["es2022"],
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "noEmitOnError": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitOverride": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "skipLibCheck": true,
    "strict": true,
    "target": "es2022",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "useDefineForClassFields": false,
    "customConditions": ["@org/source"]
  }
}
```

## File: tsconfig.json
```json
{
  "extends": "./tsconfig.base.json",
  "compileOnSave": false,
  "files": [],
  "references": [
    {
      "path": "./frontend-e2e"
    },
    {
      "path": "./backend-e2e"
    },
    {
      "path": "./frontend"
    },
    {
      "path": "./backend"
    }
  ]
}
```

## File: backend/src/app/app.controller.ts
```typescript
import { Controller, Get } from '@nestjs/common'
import { IsPublic } from '../shared/decorators/auth.decorator'
import { AppService } from './app.service'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @IsPublic()
  getData() {
    return this.appService.getData()
  }
}
```

## File: backend/src/app/app.service.ts
```typescript
import { Injectable } from '@nestjs/common'
@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' }
  }
}
```

## File: backend/src/routes/auth/auth.module.ts
```typescript
import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { SharedModule } from '../../shared/shared.module'
import { AuthRepository } from './auth.repo'
import { RoleModule } from '../role/role.module'
@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
  imports: [SharedModule, RoleModule],
})
export class AuthModule {}
```

## File: backend/src/routes/auth/error.model.ts
```typescript
import {
  BadRequestException,
  ConflictException,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common'
export const EmailAlreadyExistsException = new UnprocessableEntityException([
  { message: 'Error.EmailAlreadyExists', path: 'email' },
])
export const EmailNotFoundException = new UnprocessableEntityException([
  { message: 'Error.EmailNotFound', path: 'email' },
])
export const InvalidVerificationCodeException = new UnprocessableEntityException([
  { message: 'Error.InvalidVerificationCode', path: 'code' },
])
export const OTPExpiredException = new UnprocessableEntityException([{ message: 'Error.OTPExpired', path: 'code' }])
export const IncorrectPasswordException = new UnprocessableEntityException([
  { message: 'Error.IncorrectPassword', path: 'password' },
])
export const FailedToSendOTPException = new UnprocessableEntityException([
  { message: 'Error.FailedToSendOTP', path: 'email' },
])
export const FieldNotEmptyException = new ConflictException([{ message: 'Error.FieldNotEmpty', path: 'unknown' }])
export const RefreshTokenRevokedException = new UnauthorizedException([
  { message: 'Error.RefreshTokenRevoked', path: 'token' },
])
export const EmailRequiredException = new BadRequestException([{ message: 'Error.EmailRequired', path: 'email' }])
export const UniqueViolationException = new UnprocessableEntityException([
  { message: 'Error.EmailAlreadyExists', path: 'email' },
])
export const TOTPAlreadyEnableException = new UnprocessableEntityException([
  { message: 'Error.TOTPAlreadyEnabled', path: 'totpcode' },
])
export const TOTPNotEnableException = new UnprocessableEntityException([
  { message: 'Error.TOTPNotEnabled', path: 'totpcode' },
])
export const InvalidTOTPException = new UnprocessableEntityException([
  { message: 'Error.InvalidOTPAndCode', path: 'totpcode' },
])
export const InvalidTOTPAndCodeException = new UnprocessableEntityException([
  { message: 'Error.InvalidOTPAndCode', path: 'totpcode' },
  { message: 'Error.InvalidOTPAndCode', path: 'code' },
])
```

## File: backend/src/routes/role/role.repo.ts
```typescript
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../shared/services/prisma.service'
import {
  CreateRoleBodyType,
  GetRolesQueryType,
  GetRolesResType,
  RoleWithPermissionsType,
  UpdateRoleBodyType,
} from './role.model'
import { RoleType } from '../../shared/models/entity.model'
@Injectable()
export class RoleRepo {
  constructor(private readonly prismaService: PrismaService) {}
  async list(pagination: GetRolesQueryType): Promise<GetRolesResType> {
    const skip = (pagination.page - 1) * pagination.limit
    const take = pagination.limit
    const [totalItems, data] = await Promise.all([
      this.prismaService.role.count({
        where: {
          deletedAt: null,
        },
      }),
      this.prismaService.role.findMany({
        where: {
          deletedAt: null,
        },
        skip,
        take,
      }),
    ])
    return {
      data,
      totalItems,
      page: pagination.page,
      limit: pagination.limit,
      totalPages: Math.ceil(totalItems / pagination.limit),
    }
  }
  async findById(id: number): Promise<RoleWithPermissionsType | null> {
    return this.prismaService.role.findUnique({
      where: {
        id,
        deletedAt: null,
      },
      include: {
        permissions: {
          where: {
            deletedAt: null,
          },
        },
      },
    })
  }
  create({ createdById, data }: { createdById: number | null; data: CreateRoleBodyType }) {
    return this.prismaService.role.create({
      data: {
        ...data,
        createdById,
      },
    })
  }
  async update({
    id,
    updatedById,
    data,
  }: {
    id: number
    updatedById: number
    data: UpdateRoleBodyType
  }): Promise<RoleType> {
    if (data.permissionIds.length > 0) {
      const permissionId = await this.prismaService.permission.findMany({
        where: {
          id: {
            in: data.permissionIds,
          },
        },
      })
      const deletedPermission = permissionId.filter((permission) => permission.deletedAt === null)
      if (deletedPermission.length > 0) {
        const deletedIds = deletedPermission.map((item) => item.id).join(', ')
        throw new Error(`Permission with id has been deleted: ${deletedIds}`)
      }
    }
    return this.prismaService.role.update({
      where: {
        id,
        deletedAt: null,
      },
      data: {
        name: data.name,
        description: data.description,
        isActive: data.isActive,
        updatedById,
        permissions: {
          set: data.permissionIds.map((permissionId) => ({ id: permissionId })),
        },
      },
      include: {
        permissions: {
          where: {
            deletedAt: null,
          },
        },
      },
    })
  }
  async delete({ id, deletedById, isHard }: { id: number; deletedById: number; isHard?: boolean }): Promise<RoleType> {
    return isHard
      ? this.prismaService.role.delete({
          where: {
            id,
          },
        })
      : this.prismaService.role.update({
          where: {
            id,
          },
          data: {
            deletedAt: new Date(),
            deletedById,
          },
        })
  }
}
```

## File: backend/tsconfig.spec.json
```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../dist/out-tsc",
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "types": ["jest", "node"],
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "useDefineForClassFields": false
  },
  "references": [
    { "path": "./tsconfig.app.json" }
  ],
  "include": [
    "jest.config.ts",
    "jest.config.cts",
    "src/**/*.test.ts",
    "src/**/*.spec.ts",
    "src/**/*.d.ts",
  ]
}
```

## File: eslint.config.mjs
```javascript
import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist', '**/out-tsc'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {
       '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      "prettier/prettier": "off",
    },
  },
];
```

## File: nx.json
```json
{
  "$schema": "./node_modules/nx/schemas/nx-schema.json",
  "namedInputs": {
    "default": ["{projectRoot}/**/*", "sharedGlobals"],
    "production": [
      "default",
      "!{projectRoot}/.eslintrc.json",
      "!{projectRoot}/eslint.config.mjs",
      "!{projectRoot}/**/?(*.)+(spec|test).[jt]s?(x)?(.snap)",
      "!{projectRoot}/tsconfig.spec.json",
      "!{projectRoot}/jest.config.[jt]s",
      "!{projectRoot}/src/test-setup.[jt]s",
      "!{projectRoot}/test-setup.[jt]s"
    ],
    "sharedGlobals": []
  },
  "plugins": [
    {
      "plugin": "@nx/js/typescript",
      "options": {
        "typecheck": { "targetName": "typecheck" },
        "build": {
          "targetName": "build",
          "configName": "tsconfig.lib.json",
          "buildDepsName": "build-deps",
          "watchDepsName": "watch-deps"
        }
      }
    },
    {
      "plugin": "@nx/webpack/plugin",
      "options": {
        "buildTargetName": "build",
        "serveTargetName": "serve",
        "previewTargetName": "preview",
        "buildDepsTargetName": "build-deps",
        "watchDepsTargetName": "watch-deps",
        "serveStaticTargetName": "serve-static"
      }
    },
    { "plugin": "@nx/eslint/plugin", "options": { "targetName": "lint" } },
    {
      "plugin": "@nx/jest/plugin",
      "options": { "targetName": "test" },
      "exclude": ["backend-e2e/**/*"]
    },
    {
      "plugin": "@nx/next/plugin",
      "options": {
        "startTargetName": "start",
        "buildTargetName": "build",
        "devTargetName": "dev",
        "serveStaticTargetName": "serve-static",
        "buildDepsTargetName": "build-deps",
        "watchDepsTargetName": "watch-deps"
      }
    },
    { "plugin": "@nx/playwright/plugin", "options": { "targetName": "e2e" } }
  ],
  "nxCloudId": "6a08560a4f53ac06e37d6f88",
  "analytics": true,
  "generators": {
    "@nx/next": { "application": { "style": "tailwind", "linter": "eslint" } }
  }
}
```

## File: .github/workflows/ci.yml
```yaml
name: CI
on:
  push:
    branches:
      - main
  pull_request:
permissions:
  actions: read
  contents: read
jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 10.33.0
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      - name: Generate Prisma client
        run: pnpm --filter @org/backend exec prisma generate
      - name: Lint, test, build
        run: pnpm nx run-many -t lint test build typecheck
```

## File: backend/prisma/schema.prisma
```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

// Get a free hosted Postgres database in seconds: `npx create-db`

generator client {
  provider = "prisma-client"
  output   = "../src/generated/prisma"
}

datasource db {
  provider = "postgresql"
}

model Language {
  id                   String                @id @db.VarChar(10)
  name                 String                @db.VarChar(500)
  userTranslations     UserTranslation[]
  productTranslations  ProductTranslation[]
  categoryTranslations CategoryTranslation[]
  brandTranslations    BrandTranslation[]

  createdById Int?
  createdBy   User? @relation("LanguageCreatedBy", fields: [createdById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  updatedById Int?
  updatedBy   User? @relation("LanguageUpdatedBy", fields: [updatedById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  deletedById Int?
  deletedBy   User? @relation("LanguageDeletedBy", fields: [deletedById], references: [id], onDelete: SetNull, onUpdate: NoAction)

  deletedAt DateTime?
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  @@index([deletedAt])
}

model User {
  id          Int     @id @default(autoincrement())
  email       String
  name        String  @db.VarChar(500)
  password    String  @db.VarChar(500)
  phoneNumber String  @db.VarChar(50)
  avatar      String? @db.VarChar(1000)

  // Này có thể dùng để thực hiện chức năng quên mật khẩu, đăng nhập 2 bước
  totpSecret                  String?               @db.VarChar(1000)
  status                      UserStatus            @default(INACTIVE)
  roleId                      Int
  role                        Role                  @relation(fields: [roleId], references: [id], onDelete: NoAction, onUpdate: NoAction)
  devices                     Device[] // Liên kết 1-n với Device
  refreshTokens               RefreshToken[]
  carts                       CartItem[]
  orders                      Order[]
  reviews                     Review[]
  createdPermissions          Permission[]          @relation("PermissionCreatedBy")
  updatedPermissions          Permission[]          @relation("PermissionUpdatedBy")
  deletedPermissions          Permission[]          @relation("PermissionDeletedBy")
  createdRoles                Role[]                @relation("RoleCreatedBy")
  updatedRoles                Role[]                @relation("RoleUpdatedBy")
  deletedRoles                Role[]                @relation("RoleDeletedBy")
  createdProducts             Product[]             @relation("ProductCreatedBy")
  updatedProducts             Product[]             @relation("ProductUpdatedBy")
  deletedProducts             Product[]             @relation("ProductDeletedBy")
  createdCategories           Category[]            @relation("CategoryCreatedBy")
  updatedCategories           Category[]            @relation("CategoryUpdatedBy")
  deletedCategories           Category[]            @relation("CategoryDeletedBy")
  createdSKUS                 SKU[]                 @relation("SKUCreatedBy")
  updatedSKUS                 SKU[]                 @relation("SKUUpdatedBy")
  deletedSKUS                 SKU[]                 @relation("SKUDeletedBy")
  createdLanguages            Language[]            @relation("LanguageCreatedBy")
  updatedLanguages            Language[]            @relation("LanguageUpdatedBy")
  deletedLanguages            Language[]            @relation("LanguageDeletedBy")
  createdBrands               Brand[]               @relation("BrandCreatedBy")
  updatedBrands               Brand[]               @relation("BrandUpdatedBy")
  deletedBrands               Brand[]               @relation("BrandDeletedBy")
  createdProductTranslations  ProductTranslation[]  @relation("ProductTranslationCreatedBy")
  updatedProductTranslations  ProductTranslation[]  @relation("ProductTranslationUpdatedBy")
  deletedProductTranslations  ProductTranslation[]  @relation("ProductTranslationDeletedBy")
  createdCategoryTranslations CategoryTranslation[] @relation("CategoryTranslationCreatedBy")
  updatedCategoryTranslations CategoryTranslation[] @relation("CategoryTranslationUpdatedBy")
  deletedCategoryTranslations CategoryTranslation[] @relation("CategoryTranslationDeletedBy")
  createdBrandTranslations    BrandTranslation[]    @relation("BrandTranslationCreatedBy")
  updatedBrandTranslations    BrandTranslation[]    @relation("BrandTranslationUpdatedBy")
  deletedBrandTranslations    BrandTranslation[]    @relation("BrandTranslationDeletedBy")
  createdOrders               Order[]               @relation("OrderCreatedBy")
  updatedOrders               Order[]               @relation("OrderUpdatedBy")
  deletedOrders               Order[]               @relation("OrderDeletedBy")
  soldOrders                  Order[]               @relation("Shop")
  createdUserTranslations     UserTranslation[]     @relation("UserTranslationCreatedBy")
  updatedUserTranslations     UserTranslation[]     @relation("UserTranslationUpdatedBy")
  deletedUserTranslations     UserTranslation[]     @relation("UserTranslationDeletedBy")
  userTranslations            UserTranslation[]     @relation("User")
  sentMessages                Message[]             @relation("FromUser")
  receivedMessages            Message[]             @relation("ToUser")
  webSockets                  Websocket[]

  // 1 user có thể tạo ra nhiều user khác
  // 1 user chỉ có thể được tạo ra bởi 1 user khác
  // Tự quan hệ 1-n
  createdById  Int?
  createdBy    User?  @relation("CreatorUsers", fields: [createdById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  createdUsers User[] @relation("CreatorUsers")

  updatedById  Int?
  updatedBy    User?  @relation("UpdatorUsers", fields: [updatedById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  updatedUsers User[] @relation("UpdatorUsers")
  deletedById  Int?
  deletedBy    User?  @relation("DeletorUsers", fields: [deletedById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  deletedUsers User[] @relation("DeletorUsers")

  deletedAt DateTime?
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  @@index([deletedAt])
}

model UserTranslation {
  id          Int      @id @default(autoincrement())
  userId      Int
  user        User     @relation("User", fields: [userId], references: [id], onDelete: Cascade, onUpdate: NoAction)
  languageId  String
  language    Language @relation(fields: [languageId], references: [id], onDelete: Cascade, onUpdate: NoAction)
  address     String?  @db.VarChar(500)
  description String?

  createdById Int?
  createdBy   User? @relation("UserTranslationCreatedBy", fields: [createdById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  updatedById Int?
  updatedBy   User? @relation("UserTranslationUpdatedBy", fields: [updatedById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  deletedById Int?
  deletedBy   User? @relation("UserTranslationDeletedBy", fields: [deletedById], references: [id], onDelete: SetNull, onUpdate: NoAction)

  deletedAt DateTime?
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  @@index([deletedAt])
}

model VerificationCode {
  id    Int                  @id @default(autoincrement())
  email String               @db.VarChar(500)
  code  String               @db.VarChar(50)
  type  VerificationCodeType

  expiresAt DateTime
  createdAt DateTime @default(now())

  @@unique([email, type])
  @@index([expiresAt])
}

model Device {
  id            Int            @id @default(autoincrement())
  userId        Int
  user          User           @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: NoAction)
  userAgent     String
  ip            String
  lastActive    DateTime       @updatedAt // Thay updatedAt bằng lastActive cho ý nghĩa rõ hơn
  createdAt     DateTime       @default(now())
  isActive      Boolean        @default(true) // Trạng thái thiết bị (đang login hay đã logout)
  refreshTokens RefreshToken[] // Liên kết 1-n với RefreshToken
}

model RefreshToken {
  token     String   @unique @db.VarChar(1000)
  userId    Int
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: NoAction)
  deviceId  Int // Foreign key tới Device
  device    Device   @relation(fields: [deviceId], references: [id], onDelete: Cascade, onUpdate: NoAction)
  expiresAt DateTime
  createdAt DateTime @default(now())

  @@index([expiresAt])
}

model Permission {
  id          Int        @id @default(autoincrement())
  name        String     @db.VarChar(500)
  description String     @default("")
  path        String     @db.VarChar(1000)
  method      HTTPMethod
  module      String     @default("") @db.VarChar(500)
  roles       Role[]

  createdById Int?
  createdBy   User? @relation("PermissionCreatedBy", fields: [createdById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  updatedById Int?
  updatedBy   User? @relation("PermissionUpdatedBy", fields: [updatedById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  deletedById Int?
  deletedBy   User? @relation("PermissionDeletedBy", fields: [deletedById], references: [id], onDelete: SetNull, onUpdate: NoAction)

  deletedAt DateTime?
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  @@index([deletedAt])
}

model Role {
  id          Int          @id @default(autoincrement())
  name        String       @db.VarChar(500)
  description String       @default("")
  isActive    Boolean      @default(true)
  permissions Permission[]
  users       User[]

  createdById Int?
  createdBy   User? @relation("RoleCreatedBy", fields: [createdById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  updatedById Int?
  updatedBy   User? @relation("RoleUpdatedBy", fields: [updatedById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  deletedById Int?
  deletedBy   User? @relation("RoleDeletedBy", fields: [deletedById], references: [id], onDelete: SetNull, onUpdate: NoAction)

  deletedAt DateTime?
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  @@index([deletedAt])
}

model Product {
  id                  Int                  @id @default(autoincrement())
  publishedAt         DateTime?
  name                String               @db.VarChar(500)
  basePrice           Float
  virtualPrice        Float
  brandId             Int
  brand               Brand                @relation(fields: [brandId], references: [id], onDelete: NoAction, onUpdate: NoAction)
  images              String[]
  categories          Category[]
  /// [Variants]
  variants            Json
  skus                SKU[]
  reviews             Review[]
  productTranslations ProductTranslation[]
  orders              Order[]
  productSKUSnapshots ProductSKUSnapshot[]

  createdById Int
  createdBy   User  @relation("ProductCreatedBy", fields: [createdById], references: [id], onDelete: Cascade, onUpdate: NoAction)
  updatedById Int?
  updatedBy   User? @relation("ProductUpdatedBy", fields: [updatedById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  deletedById Int?
  deletedBy   User? @relation("ProductDeletedBy", fields: [deletedById], references: [id], onDelete: SetNull, onUpdate: NoAction)

  deletedAt DateTime?
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  @@index([deletedAt])
}

model ProductTranslation {
  id          Int      @id @default(autoincrement())
  productId   Int
  product     Product  @relation(fields: [productId], references: [id], onDelete: Cascade, onUpdate: NoAction)
  languageId  String
  language    Language @relation(fields: [languageId], references: [id], onDelete: Cascade, onUpdate: NoAction)
  name        String   @db.VarChar(500)
  description String

  createdById Int?
  createdBy   User? @relation("ProductTranslationCreatedBy", fields: [createdById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  updatedById Int?
  updatedBy   User? @relation("ProductTranslationUpdatedBy", fields: [updatedById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  deletedById Int?
  deletedBy   User? @relation("ProductTranslationDeletedBy", fields: [deletedById], references: [id], onDelete: SetNull, onUpdate: NoAction)

  deletedAt DateTime?
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  @@index([deletedAt])
  @@index([productId])
}

model Category {
  id                   Int                   @id @default(autoincrement())
  products             Product[]
  name                 String                @db.VarChar(500)
  logo                 String?               @db.VarChar(1000)
  parentCategoryId     Int?
  parentCategory       Category?             @relation("ParentCategoryCategories", fields: [parentCategoryId], references: [id], onDelete: SetNull, onUpdate: NoAction)
  childrenCategories   Category[]            @relation("ParentCategoryCategories")
  categoryTranslations CategoryTranslation[]

  createdById Int?
  createdBy   User? @relation("CategoryCreatedBy", fields: [createdById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  updatedById Int?
  updatedBy   User? @relation("CategoryUpdatedBy", fields: [updatedById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  deletedById Int?
  deletedBy   User? @relation("CategoryDeletedBy", fields: [deletedById], references: [id], onDelete: SetNull, onUpdate: NoAction)

  deletedAt DateTime?
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  @@index([deletedAt])
}

model CategoryTranslation {
  id          Int      @id @default(autoincrement())
  categoryId  Int
  category    Category @relation(fields: [categoryId], references: [id], onDelete: Cascade, onUpdate: NoAction)
  languageId  String
  language    Language @relation(fields: [languageId], references: [id], onDelete: Cascade, onUpdate: NoAction)
  name        String   @db.VarChar(500)
  description String

  createdById Int?
  createdBy   User? @relation("CategoryTranslationCreatedBy", fields: [createdById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  updatedById Int?
  updatedBy   User? @relation("CategoryTranslationUpdatedBy", fields: [updatedById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  deletedById Int?
  deletedBy   User? @relation("CategoryTranslationDeletedBy", fields: [deletedById], references: [id], onDelete: SetNull, onUpdate: NoAction)

  deletedAt DateTime?
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  @@index([deletedAt])
}

model SKU {
  id                  Int                  @id @default(autoincrement())
  value               String               @db.VarChar(500)
  price               Float
  stock               Int
  image               String
  productId           Int
  product             Product              @relation(fields: [productId], references: [id], onDelete: Cascade, onUpdate: NoAction)
  cartItems           CartItem[]
  productSKUSnapshots ProductSKUSnapshot[]

  createdById Int
  createdBy   User  @relation("SKUCreatedBy", fields: [createdById], references: [id], onDelete: Cascade, onUpdate: NoAction)
  updatedById Int?
  updatedBy   User? @relation("SKUUpdatedBy", fields: [updatedById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  deletedById Int?
  deletedBy   User? @relation("SKUDeletedBy", fields: [deletedById], references: [id], onDelete: SetNull, onUpdate: NoAction)

  deletedAt DateTime?
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  @@index([deletedAt])
  @@index([productId])
}

model Brand {
  id                Int                @id @default(autoincrement())
  logo              String             @db.VarChar(1000)
  products          Product[]
  brandTranslations BrandTranslation[]
  name              String             @db.VarChar(500)

  createdById Int?
  createdBy   User? @relation("BrandCreatedBy", fields: [createdById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  updatedById Int?
  updatedBy   User? @relation("BrandUpdatedBy", fields: [updatedById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  deletedById Int?
  deletedBy   User? @relation("BrandDeletedBy", fields: [deletedById], references: [id], onDelete: SetNull, onUpdate: NoAction)

  deletedAt DateTime?
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  @@index([deletedAt])
}

model BrandTranslation {
  id          Int      @id @default(autoincrement())
  brandId     Int
  brand       Brand    @relation(fields: [brandId], references: [id], onDelete: Cascade, onUpdate: NoAction)
  languageId  String
  language    Language @relation(fields: [languageId], references: [id], onDelete: Cascade, onUpdate: NoAction)
  name        String   @db.VarChar(500)
  description String

  createdById Int?
  createdBy   User? @relation("BrandTranslationCreatedBy", fields: [createdById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  updatedById Int?
  updatedBy   User? @relation("BrandTranslationUpdatedBy", fields: [updatedById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  deletedById Int?
  deletedBy   User? @relation("BrandTranslationDeletedBy", fields: [deletedById], references: [id], onDelete: SetNull, onUpdate: NoAction)

  deletedAt DateTime?
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  @@index([deletedAt])
}

model CartItem {
  id       Int  @id @default(autoincrement())
  quantity Int
  skuId    Int
  sku      SKU  @relation(fields: [skuId], references: [id], onDelete: Cascade, onUpdate: NoAction)
  userId   Int
  user     User @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: NoAction)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([userId, skuId])
  @@index([userId])
}

model ProductSKUSnapshot {
  id          Int    @id @default(autoincrement())
  productName String @db.VarChar(500)
  skuPrice    Float
  image       String
  skuValue    String @db.VarChar(500)
  skuId       Int?
  sku         SKU?   @relation(fields: [skuId], references: [id], onDelete: SetNull, onUpdate: NoAction)
  orderId     Int?
  order       Order? @relation(fields: [orderId], references: [id], onDelete: SetNull, onUpdate: NoAction)

  quantity            Int
  productId           Int?
  product             Product? @relation(fields: [productId], references: [id], onDelete: SetNull, onUpdate: NoAction)
  /// [ProductTranslations]
  productTranslations Json

  createdAt DateTime @default(now())
}

model Order {
  id          Int                  @id @default(autoincrement())
  userId      Int
  user        User                 @relation(fields: [userId], references: [id], onDelete: NoAction, onUpdate: NoAction)
  status      OrderStatus
  items       ProductSKUSnapshot[]
  products    Product[]
  reviews     Review[]
  /// [Receiver]
  receiver    Json
  shopId      Int?
  shop        User?                @relation("Shop", fields: [shopId], references: [id], onDelete: SetNull, onUpdate: NoAction)
  paymentId   Int
  payment     Payment              @relation(fields: [paymentId], references: [id], onDelete: NoAction, onUpdate: NoAction)
  createdById Int?
  createdBy   User?                @relation("OrderCreatedBy", fields: [createdById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  updatedById Int?
  updatedBy   User?                @relation("OrderUpdatedBy", fields: [updatedById], references: [id], onDelete: SetNull, onUpdate: NoAction)
  deletedById Int?
  deletedBy   User?                @relation("OrderDeletedBy", fields: [deletedById], references: [id], onDelete: SetNull, onUpdate: NoAction)

  deletedAt DateTime?
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  @@index([deletedAt])
  @@index([status, deletedAt])
}

model Payment {
  id        Int           @id @default(autoincrement())
  orders    Order[]
  status    PaymentStatus
  createdAt DateTime      @default(now())
  updatedAt DateTime      @updatedAt
}

model Websocket {
  id        String   @id
  userId    Int
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: NoAction)
  createdAt DateTime @default(now())
}

model Review {
  id          Int           @id @default(autoincrement())
  content     String
  rating      Int
  orderId     Int
  order       Order         @relation(fields: [orderId], references: [id], onDelete: Cascade, onUpdate: NoAction)
  productId   Int
  product     Product       @relation(fields: [productId], references: [id], onDelete: NoAction, onUpdate: NoAction)
  userId      Int
  user        User          @relation(fields: [userId], references: [id], onDelete: NoAction, onUpdate: NoAction)
  medias      ReviewMedia[]
  updateCount Int           @default(0)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([orderId, productId])
  @@index([userId])
  @@index([productId])
}

model ReviewMedia {
  id       Int       @id @default(autoincrement())
  url      String    @db.VarChar(1000)
  type     MediaType
  reviewId Int
  review   Review    @relation(fields: [reviewId], references: [id], onDelete: Cascade, onUpdate: NoAction)

  createdAt DateTime @default(now())
}

model PaymentTransaction {
  id                 Int      @id @default(autoincrement())
  gateway            String   @db.VarChar(100)
  transactionDate    DateTime @default(now())
  accountNumber      String?  @db.VarChar(100)
  subAccount         String?  @db.VarChar(250)
  amountIn           Int      @default(0)
  amountOut          Int      @default(0)
  accumulated        Int      @default(0)
  code               String?  @db.VarChar(250)
  transactionContent String?  @db.Text
  referenceNumber    String?  @db.VarChar(255)
  body               String?  @db.Text

  createdAt DateTime @default(now())
}

model Message {
  id         Int    @id @default(autoincrement())
  fromUserId Int
  fromUser   User   @relation("FromUser", fields: [fromUserId], references: [id], onDelete: Cascade, onUpdate: NoAction)
  toUserId   Int
  toUser     User   @relation("ToUser", fields: [toUserId], references: [id], onDelete: Cascade, onUpdate: NoAction)
  content    String

  readAt    DateTime?
  createdAt DateTime  @default(now())
}

enum PaymentStatus {
  PENDING
  SUCCESS
  FAILED
}

enum OrderStatus {
  PENDING_PAYMENT
  PENDING_PICKUP
  PENDING_DELIVERY
  DELIVERED
  RETURNED
  CANCELLED
}

enum VerificationCodeType {
  REGISTER
  FORGOT_PASSWORD
  LOGIN
  DISABLE_2FA
}

enum UserStatus {
  ACTIVE
  INACTIVE
  BLOCKED
}

enum HTTPMethod {
  GET
  POST
  PUT
  DELETE
  PATCH
  OPTIONS
  HEAD
}

enum MediaType {
  IMAGE
  VIDEO
}
```

## File: backend/src/routes/role/role.model.ts
```typescript
import z from 'zod'
import { PermissionSchema, RoleSchema } from '../../shared/models/entity.model'
export const RoleWithPermissionsSchema = RoleSchema.extend({
  permissions: z.array(PermissionSchema),
})
export const GetRolesResSchema = z.object({
  data: z.array(RoleSchema),
  totalItems: z.number(),
  page: z.number(),
  limit: z.number(),
  totalPages: z.number(),
})
export const GetRolesQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().default(10),
})
export const GetRoleParamsSchema = z
  .object({
    roleId: z.coerce.number(),
  })
  .strict()
export const GetRoleDetailResSchema = RoleWithPermissionsSchema
export const CreateRoleBodySchema = RoleSchema.pick({
  name: true,
  description: true,
  isActive: true,
}).strict()
export const CreateRoleResSchema = RoleSchema
export const UpdateRoleBodySchema = RoleSchema.pick({
  name: true,
  description: true,
  isActive: true,
})
  .extend({
    permissionIds: z.array(z.number()),
  })
  .strict()
export type RoleWithPermissionsType = z.infer<typeof RoleWithPermissionsSchema>
export type GetRolesResType = z.infer<typeof GetRolesResSchema>
export type GetRolesQueryType = z.infer<typeof GetRolesQuerySchema>
export type GetRoleParamsType = z.infer<typeof GetRoleParamsSchema>
export type GetRoleDetailResType = z.infer<typeof GetRoleDetailResSchema>
export type CreateRoleBodyType = z.infer<typeof CreateRoleBodySchema>
export type CreateRoleResType = z.infer<typeof CreateRoleResSchema>
export type UpdateRoleBodyType = z.infer<typeof UpdateRoleBodySchema>
```

## File: backend/tsconfig.app.json
```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../dist/out-tsc",
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "target": "es2021",
    "jsx": "react-jsx",
    "types": ["node", "multer"],
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "useDefineForClassFields": false
  },
  "include": ["src/**/*.ts", "src/**/*.tsx"],
  "exclude": [
    "jest.config.ts",
    "jest.config.cts",
    "src/**/*.spec.ts",
    "src/**/*.test.ts"
  ]
}
```

## File: package.json
```json
{
  "name": "@org/source",
  "version": "0.0.0",
  "license": "MIT",
  "scripts": {},
  "private": true,
  "packageManager": "pnpm@10.33.0",
  "devDependencies": {
    "@eslint/js": "^9.8.0",
    "@nestjs/schematics": "^11.0.0",
    "@nestjs/testing": "^11.0.0",
    "@next/eslint-plugin-next": "^16.1.6",
    "@nx/devkit": "22.7.2",
    "@nx/eslint": "22.7.2",
    "@nx/eslint-plugin": "22.7.2",
    "@nx/jest": "22.7.2",
    "@nx/js": "22.7.2",
    "@nx/nest": "^22.7.2",
    "@nx/next": "^22.7.2",
    "@nx/node": "22.7.2",
    "@nx/playwright": "22.7.2",
    "@nx/web": "22.7.2",
    "@nx/webpack": "22.7.2",
    "@playwright/test": "^1.36.0",
    "@swc-node/register": "1.11.1",
    "@swc/cli": "~0.8.0",
    "@swc/core": "1.15.8",
    "@swc/helpers": "0.5.18",
    "@testing-library/dom": "10.4.0",
    "@testing-library/react": "16.3.0",
    "@types/jest": "~30.0.0",
    "@types/node": "20.19.9",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "autoprefixer": "10.4.13",
    "babel-jest": "~30.3.0",
    "eslint": "^9.8.0",
    "eslint-config-next": "^16.1.6",
    "eslint-config-prettier": "^10.0.0",
    "eslint-plugin-import": "2.31.0",
    "eslint-plugin-jsx-a11y": "6.10.1",
    "eslint-plugin-playwright": "^1.6.2",
    "eslint-plugin-react": "7.35.0",
    "eslint-plugin-react-hooks": "5.0.0",
    "jest": "~30.3.0",
    "jest-environment-jsdom": "~30.3.0",
    "jest-environment-node": "~30.3.0",
    "jest-util": "~30.3.0",
    "nx": "22.7.0",
    "postcss": "8.4.38",
    "prettier": "^3.8.1",
    "repomix": "^1.14.1",
    "tailwindcss": "3.4.3",
    "ts-jest": "^29.4.0",
    "ts-node": "10.9.1",
    "tslib": "^2.3.0",
    "typescript": "~5.9.2",
    "typescript-eslint": "^8.40.0",
    "webpack-cli": "^5.1.4"
  },
  "dependencies": {
    "@nestjs/common": "^11.0.0",
    "@nestjs/core": "^11.0.0",
    "@nestjs/platform-express": "^11.0.0",
    "axios": "^1.6.0",
    "next": "~16.1.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "reflect-metadata": "^0.1.13",
    "rxjs": "^7.8.0",
    "zod": "^4.4.3"
  }
}
```

## File: backend/src/routes/permission/permission.model.ts
```typescript
import z from 'zod'
import { PermissionSchema } from '../../shared/models/entity.model'
export const GetPermissionsResSchema = z.object({
  data: z.array(PermissionSchema),
  totalItems: z.number(),
  page: z.number(),
  limit: z.number(),
  totalPages: z.number(),
})
export const GetPermissionsQuerySchema = z
  .object({
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().positive().default(10),
  })
  .strict()
export const GetPermissionParamsSchema = z
  .object({
    permissionId: z.coerce.number(),
  })
  .strict()
export const GetPermissionDetailResSchema = PermissionSchema
export const CreatePermissionBodySchema = PermissionSchema.pick({
  name: true,
  path: true,
  method: true,
  module: true,
}).strict()
export const UpdatePermissionBodySchema = CreatePermissionBodySchema
export type GetPermissionsResType = z.infer<typeof GetPermissionsResSchema>
export type GetPermissionsQueryType = z.infer<typeof GetPermissionsQuerySchema>
export type GetPermissionDetailResType = z.infer<typeof GetPermissionDetailResSchema>
export type CreatePermissionBodyType = z.infer<typeof CreatePermissionBodySchema>
export type GetPermissionParamsType = z.infer<typeof GetPermissionParamsSchema>
export type UpdatePermissionBodyType = z.infer<typeof UpdatePermissionBodySchema>
```

## File: backend/src/shared/guards/access-token.guard.ts
```typescript
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, ForbiddenException } from '@nestjs/common'
import { TokenService } from '../services/token.service'
import { REQUEST_ROLE_PERMISSIONS, REQUEST_USER_KEY } from '../constants/auth.constant'
import { AccessTokenPayload } from '../types/jwt.type'
import { PrismaService } from '../services/prisma.service'
import { HTTPMethod } from '../constants/role.constant'
@Injectable()
export class AccessTokenGuard implements CanActivate {
  constructor(
    private readonly tokenService: TokenService,
    private readonly prisma: PrismaService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const decodedAccessToken = await this.extractAndValidateToken(request)
    await this.validateUserPermission(decodedAccessToken, request)
    return true
  }
  private async extractAndValidateToken(request: any): Promise<AccessTokenPayload> {
    const accessToken = this.extractAccessTokenFromHeader(request)
    try {
      const decodedAccessToken = await this.tokenService.verifyAccessToken(accessToken)
      request[REQUEST_USER_KEY] = decodedAccessToken
      return decodedAccessToken
    } catch (error) {
      throw new UnauthorizedException('Error.InvalidAccessToken')
    }
  }
  private extractAccessTokenFromHeader(request: any): string {
    const accessToken = request.headers?.authorization?.split(' ')[1]
    if (!accessToken) {
      throw new UnauthorizedException('Error.MissingAccessToken')
    }
    return accessToken
  }
  private async validateUserPermission(decodedAccessToken: AccessTokenPayload, request: any): Promise<void> {
    const roleId = decodedAccessToken.roleId
    const path = request.route.path
    const method = request.method as keyof typeof HTTPMethod
    const role = await this.prisma.role
      .findUniqueOrThrow({
        where: {
          id: roleId,
          deletedAt: null,
          isActive: true,
        },
        include: {
          permissions: {
            where: {
              deletedAt: null,
              path,
              method,
            },
          },
        },
      })
      .catch(() => {
        throw new ForbiddenException()
      })
    const canAccess = role.permissions.length > 0
    if (!canAccess) {
      throw new ForbiddenException()
    }
    request[REQUEST_ROLE_PERMISSIONS] = { role }
  }
}
```

## File: backend/src/initialScript/create-permisson.ts
```typescript
import 'dotenv/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from '../app/app.module'
import { PrismaService } from '../shared/services/prisma.service'
import { HTTPMethod, RoleName } from '../shared/constants/role.constant'
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
  const server = app.getHttpAdapter().getInstance()
  const router = server.router
  const prisma = new PrismaService()
  const permissionInDB = await prisma.permission.findMany({
    where: {
      deletedAt: null,
    },
  })
  const availableRoutes: { path: string; method: keyof typeof HTTPMethod; name: string; module: string }[] =
    router.stack
      .map((layer: any) => {
        if (layer.route) {
          const path = layer.route?.path
          const method = layer.route?.stack[0].method.toUpperCase() as keyof typeof HTTPMethod
          const moduleName = String(path.split('/')[1]).toUpperCase()
          return {
            path,
            method,
            name: method + ' ' + path,
            module: moduleName,
          }
        }
        return undefined
      })
      .filter((item: any) => item !== undefined)
  let isUpdateOrDeletePermission = false
  const permissionInDBMap = permissionInDB.reduce<Record<string, (typeof permissionInDB)[number]>>((acc, item) => {
    acc[`${item.path}-${item.method}`] = item
    return acc
  }, {})
  const availableRoutesMap = availableRoutes.reduce<Record<string, (typeof availableRoutes)[number]>>((acc, item) => {
    acc[`${item.path}-${item.method}`] = item
    return acc
  }, {})
  const permissionToDelete = permissionInDB.filter((item) => {
    return !availableRoutesMap[`${item.path}-${item.method}`]
  })
  if (permissionToDelete.length > 0) {
    isUpdateOrDeletePermission = true
    const resOfDeletePermission = await prisma.permission.deleteMany({
      where: {
        id: {
          in: permissionToDelete.map((item) => item.id),
        },
      },
    })
    console.log('Delete permission: ', resOfDeletePermission.count)
  }
  const permissionToUpdate = availableRoutes.filter((item) => {
    return !permissionInDBMap[`${item.path}-${item.method}`]
  })
  if (permissionToUpdate.length > 0) {
    isUpdateOrDeletePermission = true
    const resOfDeletePermission = await prisma.permission.createMany({
      data: permissionToUpdate,
      skipDuplicates: true,
    })
    console.log('Create permission: ', resOfDeletePermission.count)
  }
  if (!isUpdateOrDeletePermission) {
    console.log('No records need updating or deleting.')
  }
  const updatedPermissionInDb = await prisma.permission.findMany({
    where: {
      deletedAt: null,
    },
  })
  const adminRole = await prisma.role.findFirstOrThrow({
    where: {
      name: RoleName.ADMIN,
      deletedAt: null,
    },
  })
  await prisma.role.update({
    where: {
      id: adminRole.id,
    },
    data: {
      permissions: {
        set: updatedPermissionInDb.map((item) => ({ id: item.id })),
      },
    },
  })
}
bootstrap()
```

## File: backend/src/shared/config/validate.ts
```typescript
import { z } from 'zod'
const envSchema = z.object({
  DATABASE_URL: z.string(),
  ACCESS_TOKEN_EXPIRES_IN: z.string(),
  REFRESH_TOKEN_EXPIRES_IN: z.string(),
  ACCESS_TOKEN_SECRET: z.string(),
  REFRESH_TOKEN_SECRET: z.string(),
  OTP_EXPIRES_IN: z.string(),
  RESEND_API_KEY: z.string(),
  SECRET_KEY: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  GOOGLE_REDIRECT_URI: z.string(),
  GOOGLE_CLIENT_REDIRECT_URI: z.string(),
  APP_NAME: z.string(),
  UPLOAD_DIR: z.string(),
})
const envParsed = envSchema.safeParse(process.env)
if (!envParsed.success) {
  console.error('❌ Invalid environment variables', envParsed.error.message)
  process.exit(1)
}
export const envConfig = envParsed.data
```

## File: backend/src/routes/auth/auth.dto.ts
```typescript
import { createZodDto } from 'nestjs-zod'
import {
  DisableTwoFactorBodySchema,
  ForgotPasswordBodySchema,
  GetAuthorizationUrlResSchema,
  LoginBodySchema,
  LoginResSchema,
  LogoutBodySchema,
  RefreshTokenBodySchema,
  RegisterBodySchema,
  RegisterResSchema,
  SendOTPSchema,
  TwoFactorSetupResSchema,
} from './auth.model'
import { MessageResSchema } from '../../shared/models/response.model'
export class RegisterBodyDTO extends createZodDto(RegisterBodySchema) {}
export class RegisterResponseDto extends createZodDto(RegisterResSchema) {}
export class SendOTPBodyDTO extends createZodDto(SendOTPSchema) {}
export class SendOTPResponseDto extends createZodDto(MessageResSchema) {}
export class LoginBodyDTO extends createZodDto(LoginBodySchema) {}
export class LoginResponseDto extends createZodDto(LoginResSchema) {}
export class RefreshTokenDTO extends createZodDto(RefreshTokenBodySchema) {}
export class GetAuthorizationUrlResDTO extends createZodDto(GetAuthorizationUrlResSchema) {}
export class LogoutBodyDTO extends createZodDto(LogoutBodySchema) {}
export class ForgotPasswordBodyDTO extends createZodDto(ForgotPasswordBodySchema) {}
export class TwoFactorSetupResDTO extends createZodDto(TwoFactorSetupResSchema) {}
export class DisableTwoFactorBodyDTO extends createZodDto(DisableTwoFactorBodySchema) {}
```

## File: backend/src/routes/role/roles.service.ts
```typescript
import { Injectable } from '@nestjs/common'
import { RoleName } from '../../shared/constants/role.constant'
import {
  CreateRoleBodyType,
  GetRolesQueryType,
  GetRolesResType,
  RoleWithPermissionsType,
  UpdateRoleBodyType,
} from './role.model'
import { RoleRepo } from './role.repo'
import {
  NotFoundRoleException,
  ProhibitedActionOnBaseRoleException,
  RoleAlreadyExistException,
  RoleNotFoundException,
  RoleValidationNotEmptyException,
} from './role.error'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client'
import { RoleType } from '../../shared/models/entity.model'
@Injectable()
export class RolesService {
  constructor(private readonly roleRepo: RoleRepo) {}
  private async verifyRole(roleId: number) {
    const role = await this.roleRepo.findById(roleId)
    if (!role) {
      throw NotFoundRoleException
    }
    const baseRoles: string[] = [RoleName.ADMIN, RoleName.CLIENT, RoleName.SELLER]
    if (baseRoles.includes(role.name)) {
      throw ProhibitedActionOnBaseRoleException
    }
    return role
  }
  async list(pagination: GetRolesQueryType): Promise<GetRolesResType> {
    const data = await this.roleRepo.list(pagination)
    return data
  }
  async findById(id: number): Promise<RoleWithPermissionsType | null> {
    const role = await this.roleRepo.findById(id)
    if (!role) {
      throw RoleNotFoundException
    }
    return role
  }
  async create({ createdById, data }: { createdById: number; data: CreateRoleBodyType }): Promise<RoleType> {
    try {
      return this.roleRepo.create({
        data,
        createdById,
      })
    } catch (error: unknown) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw RoleAlreadyExistException
      }
      throw error
    }
  }
  async update({ id, data, updatedById }: { id: number; data: UpdateRoleBodyType; updatedById: number }) {
    try {
      await this.verifyRole(id)
      const updatedRole = await this.roleRepo.update({
        id,
        updatedById,
        data,
      })
      return updatedRole
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw RoleValidationNotEmptyException
      }
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
        throw RoleAlreadyExistException
      }
      throw error
    }
  }
  async delete({ id, deletedById }: { id: number; deletedById: number }) {
    try {
      await this.verifyRole(id)
      await this.roleRepo.delete({
        id,
        deletedById,
      })
      return {
        message: 'Delete successfully!',
      }
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2005') {
        throw NotFoundRoleException
      }
      throw error
    }
  }
}
```

## File: backend/src/shared/shared.module.ts
```typescript
import { Module } from '@nestjs/common'
import { PrismaService } from './services/prisma.service'
import { HashingService } from './services/hashing.service'
import { EmailService } from './services/email.service'
import { TokenService } from './services/token.service'
import { JwtModule } from '@nestjs/jwt'
import { envConfig } from './config/validate'
import { APP_GUARD } from '@nestjs/core'
import { AuthenticationGuard } from './guards/authentication.guard'
import { AccessTokenGuard } from './guards/access-token.guard'
import { APIKeyGuard } from './guards/api-key.guard'
import { TwoFactorAuthService } from './services/2fa.service'
import { SharedUserRepository } from './repositories/shared-user.repo'
import { SharedRoleRepository } from './repositories/shared-role.repo'
@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: envConfig.ACCESS_TOKEN_SECRET,
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthenticationGuard,
    },
    PrismaService,
    HashingService,
    EmailService,
    TokenService,
    AccessTokenGuard,
    APIKeyGuard,
    TwoFactorAuthService,
    SharedUserRepository,
    SharedRoleRepository,
  ],
  exports: [
    PrismaService,
    HashingService,
    EmailService,
    TokenService,
    TwoFactorAuthService,
    SharedUserRepository,
    SharedRoleRepository,
  ],
})
export class SharedModule {}
```

## File: backend/package.json
```json
{
  "name": "@org/backend",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "seed": "npx tsx src/initialScript/index.ts"
  },
  "devDependencies": {
    "@types/bcryptjs": "^3.0.0",
    "@types/express": "^5.0.6",
    "@types/ms": "^2.1.0",
    "@types/multer": "^2.1.0",
    "@types/pg": "^8.20.0",
    "prisma": "^7.8.0",
    "tsx": "^4.22.1"
  },
  "dependencies": {
    "@nestjs/jwt": "^11.0.2",
    "@prisma/adapter-pg": "^7.8.0",
    "@prisma/client": "^7.8.0",
    "bcryptjs": "^3.0.3",
    "date-fns": "^4.2.1",
    "dotenv": "^17.4.2",
    "express": "^5.2.1",
    "google-auth-library": "^10.6.2",
    "googleapis": "^172.0.0",
    "ms": "^2.1.3",
    "multer": "^2.1.1",
    "nestjs-zod": "^5.4.0",
    "otpauth": "^9.5.1",
    "pg": "^8.20.0",
    "react": "^19.2.6",
    "react-email": "^6.1.4",
    "resend": "^6.12.3",
    "uuid": "^14.0.0"
  }
}
```

## File: backend/src/app/app.module.ts
```typescript
import { Module } from '@nestjs/common'
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core'
import { ZodSerializerInterceptor } from 'nestjs-zod'
import { AuthModule } from '../routes/auth/auth.module'
import { LanguageModule } from '../routes/language/language.module'
import { UploadModule } from '../routes/media/media.module'
import { PermissionModule } from '../routes/permission/permission.module'
import { ProfileModule } from '../routes/profile/profile.module'
import { RoleModule } from '../routes/role/role.module'
import { UserModule } from '../routes/user/user.module'
import { HttpExceptionFilter } from '../shared/filters/http-exception.filter'
import { MyZodValidationPipe } from '../shared/pipes/custom-zod-validation.pipes'
import { SharedModule } from '../shared/shared.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'
@Module({
  imports: [
    SharedModule,
    AuthModule,
    LanguageModule,
    PermissionModule,
    RoleModule,
    ProfileModule,
    UserModule,
    UploadModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: MyZodValidationPipe,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ZodSerializerInterceptor,
    },
  ],
})
export class AppModule {}
```

## File: backend/src/routes/auth/auth.repo.ts
```typescript
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../shared/services/prisma.service'
import { DeviceType, RefreshTokenType, VerifyCationCodeType } from './auth.model'
import { TypeOfVerificationCode } from '../../shared/constants/auth.constant'
import { RoleType, UserType } from '../../shared/models/entity.model'
import { WhereUniqueUserType } from '../../shared/repositories/shared-user.repo'
@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}
  async createUser(
    user: Pick<UserType, 'email' | 'name' | 'phoneNumber' | 'password' | 'roleId'>,
  ): Promise<Omit<UserType, 'password' | 'totpSecret'>> {
    return await this.prisma.user.create({
      data: user,
      omit: {
        password: true,
        totpSecret: true,
      },
    })
  }
  async createUserIncludRole(
    user: Pick<UserType, 'roleId' | 'email' | 'name' | 'password' | 'phoneNumber' | 'avatar'>,
  ): Promise<(UserType & { role: RoleType }) | null> {
    return await this.prisma.user.create({
      data: user,
      include: {
        role: true,
      },
    })
  }
  async findVerificationCode(value: Pick<VerifyCationCodeType, 'email' | 'type' | 'code'>) {
    return await this.prisma.verificationCode.findFirst({
      where: {
        email: value.email,
        type: value.type,
        code: value.code,
      },
    })
  }
  async deleteVerifycationCode(uniqueValue: { email: string; type: TypeOfVerificationCode }) {
    return await this.prisma.verificationCode.delete({
      where: {
        email_type: uniqueValue,
      },
    })
  }
  async createVerifycationCode(
    body: Pick<VerifyCationCodeType, 'email' | 'code' | 'type' | 'expiresAt'>,
  ): Promise<VerifyCationCodeType> {
    return await this.prisma.verificationCode.upsert({
      where: {
        email_type: {
          email: body.email,
          type: body.type,
        },
      },
      update: {
        code: body.code,
        expiresAt: body.expiresAt,
      },
      create: {
        email: body.email,
        code: body.code,
        type: body.type,
        expiresAt: body.expiresAt,
        createdAt: new Date(),
      },
    })
  }
  async findUserIncludeRole(where: WhereUniqueUserType): Promise<(UserType & { role: RoleType }) | null> {
    return await this.prisma.user.findFirst({
      where: {
        ...where,
        deletedAt: null,
      },
      include: {
        role: true,
      },
    })
  }
  async createDevice(
    body: Pick<DeviceType, 'userId' | 'userAgent' | 'ip'> & Partial<Pick<DeviceType, 'lastActive' | 'isActive'>>,
  ): Promise<DeviceType> {
    return await this.prisma.device.create({
      data: body,
    })
  }
  async createRefreshToken(
    body: Pick<RefreshTokenType, 'deviceId' | 'token' | 'userId' | 'expiresAt'>,
  ): Promise<RefreshTokenType> {
    return await this.prisma.refreshToken.create({
      data: body,
    })
  }
  async findUniqueRefreshTokenIncludeUserRole(uniqueValue: {
    token: string
  }): Promise<(RefreshTokenType & { user: UserType & { role: RoleType } }) | null> {
    return await this.prisma.refreshToken.findUnique({
      where: uniqueValue,
      include: {
        user: {
          include: {
            role: true,
          },
        },
      },
    })
  }
  async updateDevice(deviceId: number, data: Partial<DeviceType>) {
    return await this.prisma.device.update({
      where: {
        id: deviceId,
      },
      data,
    })
  }
  async deleteRefreshToken(uniqueValue: { token: string }): Promise<RefreshTokenType> {
    return await this.prisma.refreshToken.delete({
      where: uniqueValue,
    })
  }
}
```

## File: backend/src/routes/auth/auth.controller.ts
```typescript
import { Body, Controller, Get, Ip, Post, Query, Res } from '@nestjs/common'
import {
  DisableTwoFactorBodyDTO,
  ForgotPasswordBodyDTO,
  GetAuthorizationUrlResDTO,
  LoginBodyDTO,
  LoginResponseDto,
  LogoutBodyDTO,
  RefreshTokenDTO,
  RegisterBodyDTO,
  RegisterResponseDto,
  SendOTPBodyDTO,
  SendOTPResponseDto,
  TwoFactorSetupResDTO,
} from './auth.dto'
import { AuthService } from './auth.service'
import { ZodSerializerDto } from 'nestjs-zod'
import { UserAgent } from '../../shared/decorators/user-agent.decorator'
import { IsPublic } from '../../shared/decorators/auth.decorator'
import type { Response } from 'express'
import { envConfig } from '../../shared/config/validate'
import { MessageResDTO } from '../../shared/dtos/response.dto'
import { EmptyBodyDTO } from '../../shared/dtos/auth.dto'
import { ActiveUser } from '../../shared/decorators/active-user.decorator'
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  @IsPublic()
  @ZodSerializerDto(RegisterResponseDto)
  async register(@Body() body: RegisterBodyDTO) {
    return await this.authService.register(body)
  }
  @Post('otp')
  @IsPublic()
  @ZodSerializerDto(SendOTPResponseDto)
  async sendOTP(@Body() body: SendOTPBodyDTO) {
    return await this.authService.sendOTP(body)
  }
  @Post('login')
  @IsPublic()
  @ZodSerializerDto(LoginResponseDto)
  async login(@Body() body: LoginBodyDTO, @UserAgent() userAgent: string, @Ip() ipAddress: string) {
    return await this.authService.login({ ...body, userAgent, ipAddress })
  }
  @Post('refresh-token')
  @IsPublic()
  @ZodSerializerDto(LoginResponseDto)
  async refreshToken(@Body() body: RefreshTokenDTO, @UserAgent() userAgent: string, @Ip() ipAddress: string) {
    return await this.authService.refreshToken({ ...body, userAgent, ipAddress })
  }
  @Get('google-link')
  @IsPublic()
  @ZodSerializerDto(GetAuthorizationUrlResDTO)
  async getGoogleLink(@UserAgent() userAgent: string, @Ip() ip: string) {
    return this.authService.getAuthorizationUrl({ userAgent, ip })
  }
  @Get('google/callback')
  @IsPublic()
  async googleCallback(@Query('code') code: string, @Query('state') state: string, @Res() res: Response) {
    try {
      const data = await this.authService.googleCallback({ code, state })
      return res.redirect(
        `${envConfig.GOOGLE_CLIENT_REDIRECT_URI}?accessToken=${data?.accessToken}&refreshToken=${data?.refreshToken}`,
      )
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Has error when login with google!'
      return res.redirect(`${envConfig.GOOGLE_CLIENT_REDIRECT_URI}?errorMessage=${message}`)
    }
  }
  @Post('logout')
  @ZodSerializerDto(MessageResDTO)
  async logout(@Body() body: LogoutBodyDTO) {
    return this.authService.logout(body.refreshToken)
  }
  @Post('forgot-password')
  @IsPublic()
  @ZodSerializerDto(MessageResDTO)
  async forgotPassword(@Body() body: ForgotPasswordBodyDTO) {
    return this.authService.forgotPassword(body)
  }
  @Post('2fa/setup')
  @ZodSerializerDto(TwoFactorSetupResDTO)
  async setupTwoFactor(@Body() _: EmptyBodyDTO, @ActiveUser('userId') userId: number) {
    return this.authService.setupTwoFactorAuth(userId)
  }
  @Post('2fa/disable')
  @ZodSerializerDto(MessageResDTO)
  async disableTwoFactor(@Body() data: DisableTwoFactorBodyDTO, @ActiveUser('userId') userId: number) {
    return this.authService.disableTwoFactorAuth(data, userId)
  }
}
```

## File: backend/src/routes/auth/auth.model.ts
```typescript
import { z } from 'zod'
import { TypeOfVerificationCode } from '../../shared/constants/auth.constant'
import { UserSchema } from '../../shared/models/entity.model'
export const DeviceSchema = z.object({
  id: z.number(),
  userId: z.number(),
  userAgent: z.string(),
  ip: z.string(),
  lastActive: z.date(),
  createdAt: z.date(),
  isActive: z.boolean(),
})
export const RefreshTokenSchema = z.object({
  token: z.string({ error: 'Error.FieldNotEmpty' }).min(1, 'Error.FieldNotEmpty'),
  userId: z.number(),
  deviceId: z.number(),
  expiresAt: z.date(),
  createdAt: z.date(),
})
export const VerifyCationCodeSchema = z.object({
  id: z.number(),
  email: z.email('Error.EmailInvalid'),
  code: z.string({ error: 'Error.FieldNotEmpty' }).length(6, 'Error.InvalidVerificationCode'),
  type: z.enum(TypeOfVerificationCode, { error: 'Error.InvalidVerificationType' }),
  expiresAt: z.date(),
  createdAt: z.date(),
})
export const RegisterBodySchema = UserSchema.pick({
  email: true,
  password: true,
  name: true,
  phoneNumber: true,
})
  .extend({
    confirmPassword: z
      .string({ error: 'Error.FieldNotEmpty' })
      .min(6, 'Error.PasswordTooShort')
      .max(100, 'Error.FieldTooLong'),
    code: z.string({ error: 'Error.FieldNotEmpty' }).length(6, 'Error.InvalidVerificationCode'),
  })
  .strict()
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'Error.PasswordNotMatch',
        path: ['confirmPassword'],
      })
    }
  })
export const RegisterResSchema = UserSchema.omit({
  password: true,
  totpSecret: true,
  deletedById: true,
})
export const SendOTPSchema = VerifyCationCodeSchema.pick({
  email: true,
  type: true,
}).strict()
export const LoginBodySchema = UserSchema.pick({
  email: true,
  password: true,
})
  .extend({
    totpCode: z.string().length(6).optional(),
    code: z.string().length(6).optional(),
  })
  .strict()
  .superRefine(({ totpCode, code }, ctx) => {
    const errorMessage = 'Error.CodeOrTotpInvalid'
    if (code !== undefined && totpCode !== undefined) {
      ctx.addIssue({
        code: 'custom',
        message: errorMessage,
        path: ['totpCode'],
      })
      ctx.addIssue({
        code: 'custom',
        message: errorMessage,
        path: ['code'],
      })
    }
  })
export const LoginResSchema = z
  .object({
    accessToken: z.string(),
    refreshToken: z.string(),
  })
  .strict()
export const RefreshTokenBodySchema = RefreshTokenSchema.pick({
  token: true,
}).strict()
export const GoogleAuthStateSchema = DeviceSchema.pick({
  userAgent: true,
  ip: true,
})
export const GetAuthorizationUrlResSchema = z.object({
  url: z.url('Error.InvalidUrl'),
})
export const LogoutBodySchema = z
  .object({
    refreshToken: z.string(),
  })
  .strict()
export const ForgotPasswordBodySchema = z
  .object({
    email: z.email('Error.EmailInvalid'),
    code: z.string().length(6),
    newPassword: z.string().min(6).max(100),
    confirmNewPassword: z.string().min(6).max(100),
  })
  .strict()
  .superRefine(({ newPassword, confirmNewPassword }, ctx) => {
    if (newPassword !== confirmNewPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'Error.PasswordNotMatch',
        path: ['confirmPassword'],
      })
    }
  })
export const DisableTwoFactorBodySchema = z
  .object({
    totpCode: z.string().length(6).optional(),
    code: z.string().length(6).optional(),
  })
  .strict()
  .superRefine(({ code, totpCode }, ctx) => {
    const errorMessage = 'Error.CodeOrTotpInvalid'
    if ((code !== undefined) === (totpCode !== undefined)) {
      ctx.addIssue({
        code: 'custom',
        message: errorMessage,
        path: ['totpCode'],
      })
      ctx.addIssue({
        code: 'custom',
        message: errorMessage,
        path: ['code'],
      })
    }
  })
export const TwoFactorSetupResSchema = z
  .object({
    secret: z.string(),
    uri: z.string(),
  })
  .strict()
export type DeviceType = z.infer<typeof DeviceSchema>
export type RefreshTokenType = z.infer<typeof RefreshTokenSchema>
export type VerifyCationCodeType = z.infer<typeof VerifyCationCodeSchema>
export type RegisterBodyType = z.infer<typeof RegisterBodySchema>
export type RegisterResType = z.infer<typeof RegisterResSchema>
export type SendOTPBodyType = z.infer<typeof SendOTPSchema>
export type LoginBodyType = z.infer<typeof LoginBodySchema>
export type RefreshTokenBodySchemaType = z.infer<typeof RefreshTokenBodySchema>
export type GoogleAuthStateSchemaType = z.infer<typeof GoogleAuthStateSchema>
export type ForgotPasswordBodySchemaType = z.infer<typeof ForgotPasswordBodySchema>
export type DisableTwoFactorBodyType = z.infer<typeof DisableTwoFactorBodySchema>
export type TwoFactorSetupResType = z.infer<typeof TwoFactorSetupResSchema>
```

## File: backend/src/routes/auth/auth.service.ts
```typescript
import { Injectable } from '@nestjs/common'
import { HashingService } from '../../shared/services/hashing.service'
import {
  DisableTwoFactorBodyType,
  ForgotPasswordBodySchemaType,
  GoogleAuthStateSchemaType,
  LoginBodyType,
  RefreshTokenBodySchemaType,
  RegisterBodyType,
  SendOTPBodyType,
  VerifyCationCodeType,
} from './auth.model'
import { UserType } from '../../shared/models/entity.model'
import {
  EmailAlreadyExistsException,
  EmailNotFoundException,
  EmailRequiredException,
  FailedToSendOTPException,
  FieldNotEmptyException,
  IncorrectPasswordException,
  InvalidTOTPAndCodeException,
  InvalidTOTPException,
  InvalidVerificationCodeException,
  OTPExpiredException,
  RefreshTokenRevokedException,
  TOTPAlreadyEnableException,
  TOTPNotEnableException,
  UniqueViolationException,
} from './error.model'
import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/client'
import { TypeOfVerificationCode } from '../../shared/constants/auth.constant'
import { AuthRepository } from './auth.repo'
import { SharedUserRepository } from '../../shared/repositories/shared-user.repo'
import { generateOTP } from '../../shared/helper/generate-otp'
import { addMilliseconds } from 'date-fns'
import { envConfig } from '../../shared/config/validate'
import ms, { StringValue } from 'ms'
import { EmailService } from '../../shared/services/email.service'
import { AccessTokenPayloadCreate } from '../../shared/types/jwt.type'
import { TokenService } from '../../shared/services/token.service'
import { OAuth2Client } from 'google-auth-library'
import { google } from 'googleapis'
import { v4 as uuidv4 } from 'uuid'
import { MessageResType } from '../../shared/models/response.model'
import { TwoFactorAuthService } from '../../shared/services/2fa.service'
import { SharedRoleRepository } from '../../shared/repositories/shared-role.repo'
@Injectable()
export class AuthService {
  private oauth2Client: OAuth2Client
  constructor(
    private readonly hashingService: HashingService,
    private readonly authRepository: AuthRepository,
    private readonly emailService: EmailService,
    private readonly tokenService: TokenService,
    private readonly twoFactorAuthService: TwoFactorAuthService,
    private readonly sharedUserRepo: SharedUserRepository,
    private readonly sharedRoleRepo: SharedRoleRepository,
  ) {
    this.oauth2Client = new google.auth.OAuth2({
      client_id: envConfig.GOOGLE_CLIENT_ID,
      clientSecret: envConfig.GOOGLE_CLIENT_SECRET,
      redirect_uris: [envConfig.GOOGLE_REDIRECT_URI],
    })
  }
  async register(body: RegisterBodyType): Promise<Omit<UserType, 'password' | 'totpSecret'>> {
    try {
      const { code, email, name, phoneNumber, password } = body
      await this.validateVerificationCode({ email, code, type: TypeOfVerificationCode.REGISTER })
      const [clientRoleId, hashedPassword] = await Promise.all([
        this.sharedRoleRepo.getClientRoleId(),
        this.hashingService.hash(password),
      ])
      const [user] = await Promise.all([
        this.authRepository.createUser({
          email,
          name,
          phoneNumber,
          password: hashedPassword,
          roleId: clientRoleId,
        }),
        this.authRepository.deleteVerifycationCode({ email, type: TypeOfVerificationCode.REGISTER }),
      ])
      return user
    } catch (error: unknown) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw UniqueViolationException
      } else if (error instanceof PrismaClientValidationError) {
        throw FieldNotEmptyException
      }
      throw error
    }
  }
  async sendOTP(body: SendOTPBodyType): Promise<MessageResType> {
    try {
      const user = await this.sharedUserRepo.findUnique({ email: body.email })
      if (body.type === TypeOfVerificationCode.REGISTER && user) {
        throw EmailAlreadyExistsException
      }
      if (body.type === TypeOfVerificationCode.FORGOT_PASSWORD && !user) {
        throw EmailNotFoundException
      }
      const code = generateOTP()
      await this.authRepository.createVerifycationCode({
        email: body.email,
        code,
        type: body.type,
        expiresAt: addMilliseconds(new Date(), ms(envConfig.OTP_EXPIRES_IN as StringValue)),
      })
      const { error } = await this.emailService.sendOTP({ email: body.email, code })
      if (error) {
        throw FailedToSendOTPException
      }
      return { message: 'OTP sent successfully' }
    } catch (error) {
      if (error instanceof PrismaClientValidationError) {
        throw FieldNotEmptyException
      } else if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw UniqueViolationException
      }
      throw error
    }
  }
  async login(body: LoginBodyType & { userAgent: string; ipAddress: string }): Promise<{
    accessToken: string
    refreshToken: string
  }> {
    try {
      const { email, password, userAgent, ipAddress } = body
      const user = await this.authRepository.findUserIncludeRole({ email })
      if (!user) {
        throw EmailNotFoundException
      }
      if (user.totpSecret) {
        if (!body.totpCode && !body.code) {
          throw InvalidTOTPAndCodeException
        }
        if (body.totpCode) {
          const isValid = this.twoFactorAuthService.verifyTOTP({
            email: user.email,
            token: body.totpCode,
            secret: user.totpSecret,
          })
          if (!isValid) {
            throw InvalidTOTPException
          }
        } else if (body.code) {
          await this.validateVerificationCode({
            email: user.email,
            code: body.code,
            type: TypeOfVerificationCode.LOGIN,
          })
        }
      }
      const isPasswordValid = await this.hashingService.verify(password, user.password)
      if (!isPasswordValid) {
        throw IncorrectPasswordException
      }
      const device = await this.authRepository.createDevice({
        userId: user.id,
        userAgent,
        ip: ipAddress,
        lastActive: new Date(),
        isActive: true,
      })
      const tokens = await this.generateToken({
        userId: user.id,
        roleId: user.roleId,
        roleName: user.role.name,
        deviceId: device.id,
      })
      return tokens
    } catch (error) {
      if (error instanceof PrismaClientValidationError) {
        throw FieldNotEmptyException
      } else if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw UniqueViolationException
      }
      throw error
    }
  }
  async refreshToken(payload: RefreshTokenBodySchemaType & { userAgent: string; ipAddress: string }) {
    try {
      const { userId } = await this.tokenService.verifyRefreshToken(payload.token)
      const refreshTokenIsInDB = await this.authRepository.findUniqueRefreshTokenIncludeUserRole({
        token: payload.token,
      })
      if (!refreshTokenIsInDB) {
        throw RefreshTokenRevokedException
      }
      const {
        deviceId,
        user: {
          roleId,
          role: { name: roleName },
        },
      } = refreshTokenIsInDB
      const [, , tokens] = await Promise.all([
        this.authRepository.updateDevice(deviceId, {
          ip: payload.ipAddress,
          userAgent: payload.userAgent,
        }),
        this.authRepository.deleteRefreshToken({ token: payload.token }),
        this.generateToken({ userId, deviceId, roleId, roleName }),
      ])
      return tokens
    } catch (error: unknown) {
      if (error instanceof PrismaClientValidationError) {
        throw FieldNotEmptyException
      } else if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw UniqueViolationException
      }
      throw error
    }
  }
  async getAuthorizationUrl({ userAgent, ip }: GoogleAuthStateSchemaType) {
    const scope = ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email']
    const stateString = Buffer.from(JSON.stringify({ userAgent, ip })).toString('base64')
    const url = this.oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope,
      include_granted_scopes: true,
      state: stateString,
    })
    return { url }
  }
  async googleCallback({ code, state }: { code: string; state: string }) {
    try {
      let userAgent = 'Unknown'
      let ip = 'Unknown'
      try {
        if (state) {
          const clientInfo = JSON.parse(Buffer.from(state, 'base64').toString()) as GoogleAuthStateSchemaType
          userAgent = clientInfo.userAgent
          ip = clientInfo.ip
        }
      } catch (error) {
        console.log(error)
      }
      const { tokens } = await this.oauth2Client.getToken(code)
      this.oauth2Client.setCredentials(tokens)
      const oauth2 = google.oauth2({ version: 'v2', auth: this.oauth2Client })
      const { data } = await oauth2.userinfo.get()
      if (!data.email) {
        throw EmailRequiredException
      }
      let user = await this.authRepository.findUserIncludeRole({ email: data.email })
      if (!user) {
        const clientRole = await this.sharedRoleRepo.getClientRoleId()
        const randomPassword = uuidv4()
        const hashedPassword = await this.hashingService.hash(randomPassword.toString())
        user = await this.authRepository.createUserIncludRole({
          email: data.email,
          name: data.name ?? '',
          phoneNumber: '',
          roleId: clientRole,
          password: hashedPassword,
          avatar: data.picture ?? null,
        })
      }
      const device = await this.authRepository.createDevice({
        userId: user?.id as number,
        userAgent,
        ip,
      })
      const authTokens = await this.generateToken({
        userId: user?.id as number,
        roleId: user?.roleId as number,
        roleName: user?.role.name as string,
        deviceId: device.id,
      })
      return authTokens
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  async generateToken(payload: AccessTokenPayloadCreate): Promise<{
    accessToken: string
    refreshToken: string
  }> {
    // Tạo accessToken và refreshToken
    const [accessToken, refreshToken] = await Promise.all([
      this.tokenService.signAccessToken({
        userId: payload.userId,
        deviceId: payload.deviceId,
        roleId: payload.roleId,
        roleName: payload.roleName,
      }),
      this.tokenService.signRefreshToken({
        userId: payload.userId,
      }),
    ])
    // Decoded refresh token để lưu vào DB
    const decodedRefreshToken = await this.tokenService.verifyRefreshToken(refreshToken)
    // Lưu vào DB
    await this.authRepository.createRefreshToken({
      deviceId: payload.deviceId,
      token: refreshToken,
      userId: payload.userId,
      expiresAt: new Date(decodedRefreshToken.exp * 1000),
    })
    return { accessToken, refreshToken }
  }
  async logout(refreshToken: string): Promise<MessageResType> {
    try {
      await this.tokenService.verifyRefreshToken(refreshToken)
      const deletedRefreshToken = await this.authRepository.deleteRefreshToken({ token: refreshToken })
      await this.authRepository.updateDevice(deletedRefreshToken.deviceId, {
        isActive: false,
      })
      return { message: 'logout successfully' }
    } catch (error) {
      if (error instanceof PrismaClientValidationError) {
        throw FieldNotEmptyException
      } else if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw UniqueViolationException
      }
      throw error
    }
  }
  async forgotPassword(payload: ForgotPasswordBodySchemaType): Promise<MessageResType> {
    const { code, email, newPassword } = payload
    const user = await this.sharedUserRepo.findUnique({ email })
    if (!user) {
      throw EmailNotFoundException
    }
    await this.validateVerificationCode({
      email,
      code,
      type: TypeOfVerificationCode.FORGOT_PASSWORD,
    })
    const passwordHashed = await this.hashingService.hash(newPassword)
    await Promise.all([
      this.sharedUserRepo.update({ id: user.id }, { password: passwordHashed }),
      this.authRepository.deleteVerifycationCode({ email, type: TypeOfVerificationCode.FORGOT_PASSWORD }),
    ])
    return {
      message: 'Update password successfully',
    }
  }
  async validateVerificationCode(uniqueValue: {
    email: string
    code: string
    type: TypeOfVerificationCode
  }): Promise<VerifyCationCodeType> {
    const verifycationOTP = await this.authRepository.findVerificationCode({
      email: uniqueValue.email,
      type: uniqueValue.type,
      code: uniqueValue.code,
    })
    if (!verifycationOTP) {
      throw InvalidVerificationCodeException
    }
    if (verifycationOTP.expiresAt < new Date()) {
      throw OTPExpiredException
    }
    return verifycationOTP
  }
  async setupTwoFactorAuth(userId: number) {
    const user = await this.sharedUserRepo.findUnique({ id: userId })
    if (!user) {
      throw EmailNotFoundException
    }
    if (user.totpSecret) {
      throw TOTPAlreadyEnableException
    }
    const { secret, uri } = this.twoFactorAuthService.generateTOTP(user.email)
    await this.sharedUserRepo.update(
      { id: userId },
      {
        totpSecret: secret,
        updatedById: userId,
      },
    )
    return {
      secret,
      uri,
    }
  }
  async disableTwoFactorAuth(data: DisableTwoFactorBodyType, userId: number) {
    const { code, totpCode } = data
    const user = await this.sharedUserRepo.findUnique({ id: userId })
    if (!user) {
      throw EmailNotFoundException
    }
    if (!user.totpSecret) {
      throw TOTPNotEnableException
    }
    if (totpCode) {
      const isValid = this.twoFactorAuthService.verifyTOTP({
        email: user.email,
        token: totpCode,
        secret: user.totpSecret,
      })
      if (!isValid) {
        throw InvalidTOTPException
      }
    }
    else if (code) {
      await this.validateVerificationCode({
        email: user.email,
        code,
        type: TypeOfVerificationCode.DISABLE_2FA,
      })
    }
    await this.sharedUserRepo.update(
      {
        id: userId,
      },
      { totpSecret: null, updatedById: userId },
    )
    return {
      message: 'Turn off 2FA success!',
    }
  }
}
```
