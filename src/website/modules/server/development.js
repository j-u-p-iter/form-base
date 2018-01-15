import express from 'express';

import Middlewares from 'server/middlewares';
import Router from 'server/router';

import utils from 'server/utils';


const app = express();

[
  new Middlewares(app),
  new Router(app),
].forEach(module => module.init());

utils.startServer(app);
