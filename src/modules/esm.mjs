import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";
import { release, version } from "os";
import { createServer } from "http";

import("./files/c.js")

const __filename = fileURLToPath(import.meta.url);
const a = JSON.parse(
  await readFile(`${dirname(__filename)}/files/a.json`, "utf8")
);
const b = JSON.parse(
  await readFile(`${dirname(__filename)}/files/b.json`, "utf8")
);
const PORT = 3000;

export const unknownObject = Math.random() > 0.5 ? a : b;
export const myServer = createServer((_, res) => {
  res.end("Request accepted");
});

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${dirname(__filename)}`);
console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});
