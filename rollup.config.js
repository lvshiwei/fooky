import babel from "rollup-plugin-babel";
export default {
  input: "src/index.js",
  output: {
    strict: true,
    file: "dist/index.js",
    sourcemap: true,
    format: "cjs",
  },
  plugins: [
    babel({
      exclude: "node_modules/**", // only transpile our source code
    }),
  ],
  external:[
    'react'
  ]
};
