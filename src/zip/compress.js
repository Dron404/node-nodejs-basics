import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

const compress = async () => {
  const filename = fileURLToPath(import.meta.url);
  const readStream = createReadStream(
    path.join(dirname(filename), "files", "fileToCompress.txt")
  );
  const writeStream = createWriteStream(
    path.join(dirname(filename), "files", "archive.gz")
  );
  const gZlib = createGzip();
  readStream.pipe(gZlib).pipe(writeStream);
};

await compress();
