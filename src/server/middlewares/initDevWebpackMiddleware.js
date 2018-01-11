import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import webpackConfig from '../../../webpack.dev';


const compiler = webpack(webpackConfig);

const initDevWebpackMiddleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
});


export default initDevWebpackMiddleware;
