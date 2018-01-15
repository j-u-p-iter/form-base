import { getConfig } from './utils';


const configs = {
  SERVER: {
    PORT: getConfig('PORT', 3000),
    HOST: getConfig('HOST', '127.0.0.1'),
    ENV: getConfig('ENV', 'development'),
  },
};


export default configs;
