import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { fork } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const childScript = join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  const chProcess = fork(childScript, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["hello", 123, "test", null]);
