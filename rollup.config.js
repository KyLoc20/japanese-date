import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

import alias from "@rollup/plugin-alias";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import analyze from "rollup-plugin-analyzer";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");

const outputOptions = {
  exports: "named",
  preserveModules: true,
  banner: `/*
 * japanese-date
 * {@link https://github.com/KyLoc20/japanese-date}
 * @copyright KyLoc20
 * @license MIT
 */`,
};

const makeExternalPredicate = (externalArr) => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(
    `^(${externalArr.join("|")})($|/)`
  );
  return (id) => pattern.test(id);
};

const config = {
  input: "src/index.js",
  output: [
    {
      dir: "dist/esm",
      format: "esm",
      ...outputOptions,
    },
    {
      dir: "dist/cjs",
      format: "cjs",
      ...outputOptions,
    },
    {
      file: "dist/umd/bundle.js",
      format: "umd",
      name: "japanese-date-bundle",
    },
  ],
  external: makeExternalPredicate([
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ]),
  plugins: [
    alias({
      entries: {
        src: fileURLToPath(new URL("src", import.meta.url)),
      },
    }),
    nodeResolve(),
    commonjs({ include: ["node_modules/**"] }),
    // terser(),
    analyze({
      hideDeps: true,
      limit: 0,
      summaryOnly: true,
    }),
  ],
};

export default config;
