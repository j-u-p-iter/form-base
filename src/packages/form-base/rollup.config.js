import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import jsonToES from 'rollup-plugin-json';
import builtins from 'rollup-plugin-node-builtins';


const config = {
  output: {
    format: 'umd',
    name: 'FormBase',
    globals: {
      react: 'React',
      'prop-types': 'PropTypes',
      'react-router': 'ReactRouter',
    },
  },
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    builtins(),
    jsonToES(),
    resolve(),
    commonjs(),
  ],
  external: ['react', 'redux', 'prop-types'],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(uglify());
}


export default config;
