import { createReadStream } from "fs";
import { createHash } from "crypto";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const calculateHash = async () => {
  const filename = fileURLToPath(import.meta.url);

  createReadStream(
    path.join(dirname(filename), "files", "fileToCalculateHashFor.txt")
  ).on("data", (data) => {
    const hash = createHash("sha256");
    console.log(hash.update(data).digest("hex"));
  });
};

await calculateHash();
