import {
  getConfig,
} from './utils';


const configs = {
  SERVER: {
    PORT: getConfig('PORT', 3001),
    HOST: getConfig('HOST', '127.0.0.1'),
    ENV: getConfig('ENV', 'test'),
  },
  DB: {
    CLIENT: {
      HOST: '127.0.0.1',
    },
    NAME: 'redux-socket-chat-test',
  },
};


export default configs;
