module.exports = {
  presets: ["module:@react-native/babel-preset"],
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
          app: "./src/app",
          components: "./src/components",
          hooks: "./src/hooks",
          services: "./src/services",
          store: "./src/store",
          theme: "./src/theme",
          types: "./src/types",
          utils: "./src/utils",
          assets: "./assets",
        },
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
  ],
};
