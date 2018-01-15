// add some es6 feqtures through polyfills
require('regenerator-runtime/runtime');

// compile es6 to es5
require('babel-register');

require(`./${process.env.NODE_ENV}.js`);
