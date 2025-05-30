import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "lib",
      format: "esm",
      entryFileNames: "[name].esm.js",
      sourcemap: false,
    },
    {
      dir: "lib",
      format: "cjs",
      entryFileNames: "[name].cjs.js",
      sourcemap: false,
    },
  ],
  plugins: [
    typescript({
      module: "ESNext",
      sourceMap: false,
      declarationDir: "./lib/types", // 类型文件生成的地方
    }),
  ],
  external: ["vue", "react"], // 声明外部依赖
};
