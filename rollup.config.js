const replace = require('@rollup/plugin-replace')
const resolve = require('@rollup/plugin-node-resolve').default
const commonjs = require('@rollup/plugin-commonjs')
const typescript = require('@rollup/plugin-typescript')
const dev = require('rollup-plugin-dev')
const postcss = require('rollup-plugin-postcss')
const url = require('@rollup/plugin-url')

const pkgName = 'Vive'
module.exports = {
  input: 'src/index.tsx',
  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    postcss({
      extensions: ['.less'],
      use: {
        less: { javascriptEnabled: true },
      },
      modules: true,
      extract: false,
      inject: true,
      minimize: false,
    }),
    url({
      include: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],
      limit: Infinity,
      emitFiles: false,
    }),
    resolve({ extensions: ['.mjs', '.js', '.json', '.ts', '.tsx'] }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false,
    }),
    process.env.ROLLUP_WATCH &&
      dev({
        port: 3000,
        dirs: ['dist', 'public'],
        spa: './index.html',
      }),
  ],
  output: [
    { file: 'dist/index.d.ts', format: 'es', sourcemap: true },
    { file: 'dist/index.cjs.js', format: 'cjs', sourcemap: true },
    {
      file: 'dist/index.umd.min.js',
      format: 'umd',
      name: pkgName,
      sourcemap: true,
    },
  ],
}
