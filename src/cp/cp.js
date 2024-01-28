import { spawn } from "child_process";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const spawnChildProcess = async (args) => {
  const filename = fileURLToPath(import.meta.url);

  const children = spawn("node", [
    path.join(dirname(filename), "files", "script.js"),
    ...args,
  ]);
  children.stdout.on("data", (data) => {
    process.stdout.write(data.toString());
  });
  process.stdin.on("data", (data) => {
    children.stdin.write(data.toString());
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg1", "arg2"]);
