module.exports = {
  presets: [
    ['env', {
      modules: process.env.BABEL_ENV === 'cmjs' ? 'commonjs' : false
    }],
    'react',
  ],
};
