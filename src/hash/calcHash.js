import { createReadStream } from "fs";
import { createHash } from "crypto";

const calculateHash = async () => {
  createReadStream('./src/hash/files/fileToCalculateHashFor.txt').on(
    "data",
    (data) => {
      const hash = createHash("sha256");
      hash.update(data);
      console.log(hash.update(data).digest("hex"));
    }
  );
};

await calculateHash();
