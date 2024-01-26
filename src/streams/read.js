import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { createReadStream } from "fs";
import { stdout } from "process";


const read = async () => {
  const filename = fileURLToPath(import.meta.url);
  createReadStream(path.join(dirname(filename), "files", "fileToRead.txt")).on(
    "data",
    (data) => {
      stdout.write(data.toString() + "\n");
    }
  );
};

await read();
