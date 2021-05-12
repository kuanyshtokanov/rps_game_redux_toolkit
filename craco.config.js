const path = require("path");
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, "src/components/"),
      '@features': path.resolve(__dirname, "src/features/"),
      '@helpers': path.resolve(__dirname, "src/helpers/"),
      '@store': path.resolve(__dirname, "src/store/"),
      '@consts': path.resolve(__dirname, "src/consts/"),
    }
  }
}
