import { defineConfig } from "rollup";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";

export default defineConfig({
    input: "src/index.js",
    output: {
        dir: "dist",
        format: "es",
        name: "sleek-drag-and-drop",
    },
    external: ["react", "react-dom"],
    plugins: [
        resolve(),
        babel({
            babelHelpers: "bundled",
            exclude: "node_modules/**",
            presets: ["@babel/preset-react", "@babel/preset-env"],
        }),
    ],
});
