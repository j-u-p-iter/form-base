import express from 'express';

import staticsRoutes from './staticsRoutes';


class Router {
  app = null;

  constructor(app) {
    this.app = app;
  }

  init() {
    Object.values({ statics: staticsRoutes }).forEach((routes) => {
      const router = express.Router();
      const routesBody = routes.body;

      Object.keys(routesBody).forEach((path) => {
        const route = routesBody[path];

        router[route.method](path, route.handler);

        this.app.use(routes.description.namespace, router);
      });
    });
  }
}


export default Router;
