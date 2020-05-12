import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
export default {
  input: "src/index.js",
  output: {
    strict: true,
    file: "dist/index.js",
    sourcemap: true,
    format: "cjs",
  },
  plugins: [
    commonjs(),
    resolve(),
    babel({
      exclude: "node_modules/**", // only transpile our source code
    }),
  ],
  external: [
  ],
};
