import { spawn } from 'node:child_process';
import process from 'node:process';

const isWindows = process.platform === 'win32';
const npmCommand = isWindows ? 'npm.cmd' : 'npm';
const port = process.env.PORT || '3000';

console.log('Le Vontea development server');
console.log(`Folder: ${process.cwd()}`);
console.log(`URL: http://localhost:${port}`);
console.log('Stop server: Ctrl + C');

const child = spawn(npmCommand, ['run', 'dev'], {
  stdio: 'inherit',
  shell: false,
  env: { ...process.env, PORT: port },
});

const shutdown = () => {
  if (!child.killed) child.kill();
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

child.on('exit', (code, signal) => {
  if (signal) process.exit(0);
  process.exit(code ?? 0);
});
