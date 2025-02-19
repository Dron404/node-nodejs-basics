import fs from "fs/promises";

const rename = async () => {
  try {
    const files = await fs.readdir("./src/fs/files");
    if (files.includes('properFilename.md')) {
      throw new Error();
    }
    await fs.rename(
      "./src/fs/files/wrongFilename.txt",
      "./src/fs/files/properFilename.md"
    );
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await rename();
