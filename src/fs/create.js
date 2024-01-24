import fs from "fs/promises";

const create = async () => {
  try {
    const files = await fs.readdir("./src/fs/files/");

    if (files.includes("fresh.txt")) {
      throw new Error("FS operation failed: File already exists.");
    }
    await fs.writeFile("./src/fs/files/fresh.txt", "I am fresh and young");
  } catch (e) {
    throw new Error(e.message);
  }
};

await create();
