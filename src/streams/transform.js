import { Transform, pipeline } from "node:stream";
import { stdin, stdout } from "node:process";

const transform = async () => {
  const transformer = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.reverse()+ '\n');
      callback(null);
    },
  });
  stdin.pipe(transformer).pipe(stdout);
/*   pipeline(stdin, transformer, stdout, ()=>{}); */
};

await transform();
