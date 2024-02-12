import { Transform } from "stream";
import { stdin, stdout } from "process";

const transform = async () => {
  const transform = new Transform({
    transform(chunk, encoding, callback) {
      const result = chunk.toString().split("").reverse().join("");
      callback(null, result);
    },
  });
  stdin.pipe(transform).pipe(stdout);
};

await transform();
