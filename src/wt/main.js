import os from "os";
import { Worker } from "worker_threads";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const performCalculations = async () => {
  const filename = fileURLToPath(import.meta.url);
  const result = [];
  for (let i = 0; i < os.cpus().length; i++) {
    await new Promise((resolve) => {
      const worker = new Worker(path.join(dirname(filename), "worker.js"));
      worker.postMessage(10 + i);

      worker.on("error", () => {
        result.push({ status: "error", data: null });
        resolve();
      });

      worker.on("message", (data) => {
        result.push({ status: "resolved", data });
        resolve();
      });
    });
  }
  console.log(result);
};

await performCalculations();
