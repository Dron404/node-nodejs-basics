import { env } from "node:process";

const parseEnv = () => {
  const result = [];
  for (const key in env) {
    if (key.match(/^RSS_/)) {
      result.push(`${key}=${env[key]}`);
    }
  }
  console.log(result.join("; "));
};

parseEnv();
