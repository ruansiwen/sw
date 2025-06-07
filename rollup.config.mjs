import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import postcss from "rollup-plugin-postcss";
import vue from "rollup-plugin-vue";
import babel from "@rollup/plugin-babel";
// import swc from "@rollup/plugin-swc";
// import svg from "rollup-plugin-svg";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "lib",
      format: "esm",
      sourcemap: true,
      entryFileNames: "esm/[name].esm.js",
    },
    {
      dir: "lib",
      format: "cjs",
      sourcemap: true,
      entryFileNames: "cjs/[name].cjs.js",
    },
  ],
  plugins: [
    peerDepsExternal(), // 排除 peerDependencies
    typescript({
      module: "ESNext",
      sourceMap: true,
    }),
    postcss({
      extract: true, // 提取 CSS 到单独的文件
      minimize: true,
    }),
    babel({
      babelHelpers: "bundled",
      envName: "react",
    }),
    vue(),
    // commonjs(), // 处理 cjs 模块
    resolve() // 解析第三方依赖

  ],
  external: ["vue", "react", "react/jsx-runtime"], // 声明外部依赖
};
