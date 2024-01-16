module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "babel-plugin-inline-import",
      {
        extensions: [".svg"],
      },
    ],
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          "@": "./src",
          "@types": "./src/types",
          "@store": "./src/store",
          "@assets": "./assets",
          "@utils": "./src/utils",
          "@theme": "./src/theme",
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@stacks": "./src/stacks",
          "@hooks": "./src/hooks",
        },
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
