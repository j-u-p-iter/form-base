import initDevWebpackMiddleware from './initDevWebpackMiddleware';
import commonMiddlewares from './commonMiddlewares';


class Middlewares {
  app = null;

  constructor(app) {
    this.app = app;
  }

  init() {
    this.app.use([
      ...commonMiddlewares(),
      initDevWebpackMiddleware,
    ]);
  }
}


export default Middlewares;
