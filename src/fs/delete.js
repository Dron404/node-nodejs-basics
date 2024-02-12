import fs from "fs/promises";
import path from "path";

const remove = async () => {
  try {
    await fs.unlink(path.join("src", "fs", "files", "fileToRemove.txt"));
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await remove();
