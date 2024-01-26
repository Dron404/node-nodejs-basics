import { createWriteStream } from "fs";
import { stdin } from "process";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const write = async () => {
  const filename = fileURLToPath(import.meta.url);
  const writeStream = createWriteStream(
    path.join(dirname(filename), "files", "fileToWrite.txt")
  );
  stdin.pipe(writeStream);
};

await write();
 