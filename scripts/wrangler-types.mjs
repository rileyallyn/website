import { spawnSync } from 'node:child_process';
import { existsSync, renameSync } from 'node:fs';

// Wrangler adds `Cloudflare.GlobalProps.mainModule` when the built worker exists.
// That import pulls generated output into `svelte-check`. Hide the worker while
// generating types so the declarations stay stable.
const worker = '.svelte-kit/cloudflare/_worker.js';
const backup = `${worker}.types-bak`;
const hadWorker = existsSync(worker);

if (hadWorker) renameSync(worker, backup);

let status;

try {
	const result = spawnSync('wrangler', ['types', ...process.argv.slice(2)], {
		stdio: 'inherit',
		env: process.env
	});
	status = result.status ?? 1;
} finally {
	if (hadWorker && existsSync(backup)) renameSync(backup, worker);
}

process.exit(status);
