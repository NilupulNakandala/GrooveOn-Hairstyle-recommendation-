// Import the `spawn` function from the `child_process` module
import { spawn } from 'child_process';

// Create a child process to execute a Python script
const childPython = spawn('python', ['--version']);

// Handle standard output (stdout) data from the child process
childPython.stdout.on('data', (data) => {
  console.log('stdout:', data.toString()); // Convert buffer to string
});

// Handle standard error (stderr) data from the child process
childPython.stderr.on('data', (data) => {
  console.error('stderr:', data.toString()); // Convert buffer to string
});

// Handle the child process exit event
childPython.on('close', (code) => {
  console.log('Child process exited with code:', code);
});
