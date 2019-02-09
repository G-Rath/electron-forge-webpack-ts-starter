const path = require('path');

const PATH_TO_ROOT = path.resolve(__dirname, '..');

/**
 * The common webpack configuration settings,
 * shared by both `main` & `renderer` compilers.
 *
 * @type {webpack.Configuration}
 */
module.exports = {
  optimization: {
    /* none for now! */
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@src': path.resolve(PATH_TO_ROOT, 'src'),
      "@assets": path.resolve(PATH_TO_ROOT, "src/assets/"),
      '@main': path.resolve(PATH_TO_ROOT, 'src/main/'),
      '@renderer': path.resolve(PATH_TO_ROOT, 'src/renderer/'),
      '@shared': path.resolve(PATH_TO_ROOT, 'src/shared/')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.json'
        },
        exclude: /node_modules/
      }
    ]
  }
};
