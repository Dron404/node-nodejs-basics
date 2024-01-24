import fs from "fs/promises";
const read = async () => {
  try {
    const content = await fs.readFile("./src/fs/files/fileToRead.txt");
    console.log(content.toString());
  } catch (e) {
    throw new Error("FS operation failed");
    
  }
};

await read();
