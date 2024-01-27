import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";

const decompress = async () => {
  const filename = fileURLToPath(import.meta.url);
  const readStream = createReadStream(
    path.join(dirname(filename), "files",  "archive.gz")
  );
  const writeStream = createWriteStream(
    path.join(dirname(filename), "files", "fileToCompress.txt")
  );
  const guZlib = createGunzip();
  readStream.pipe(guZlib).pipe(writeStream);
};

await decompress();
