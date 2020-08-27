import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import html2 from 'rollup-plugin-html2';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import { nanoid } from 'nanoid';

const postcssConfig = require('./postcss.config');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: 'src/main.js',
  output: {
    // Hashed file name on production
    file: isProduction ? `./build/bundle.${nanoid()}.js` : './build/bundle.js',
    format: 'iife',
    name: 'bundle',
    globals: {
      hyperapp: 'hyperapp',
    },
  },
  plugins: [
    postcss({
      extract: true,
      plugins: postcssConfig.plugins,
      minimize: isProduction,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
    isProduction && terser(),
    html2({
      template: 'src/public/index.html',
      favicon: 'src/public/favicon.ico',
    }),
    isDevelopment && livereload('build'),
    isDevelopment &&
      serve({
        contentBase: ['build'],
        historyApiFallback: true,
        port: 8080,
        open: true,
      }),
  ],
};
