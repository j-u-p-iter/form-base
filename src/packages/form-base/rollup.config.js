import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';


const config = {
  output: {
    format: 'umd',
    name: 'FormBase'
  },
  plugins: [
    babel({ exclude: 'node_modules/**' }),
  ],
  external: ['react', 'redux'],
  globals: {
    react: 'React',
    'prop-types': 'PropTypes',
    'react-router': 'ReactRouter',
  },
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(uglify());
}


export default config;
