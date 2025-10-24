#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = new URL('..', import.meta.url);
const specPath = resolve(new URL('./specs/hero.yml', projectRoot).pathname);

async function main() {
  const spec = await readFile(specPath, 'utf8');
  process.stdout.write('Loaded hero spec:\n');
  process.stdout.write(spec);
  process.stdout.write('\n\nUse this scaffold to generate hero components based on the atoms.\n');
}

main().catch((error) => {
  console.error('Failed to scaffold hero block', error);
  process.exitCode = 1;
});
