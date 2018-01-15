import * as configs from 'common/configs';


const envConfigs = configs[process.env.NODE_ENV];

const { DB, SERVER } = envConfigs;

const createMongooseConnectionPath = () => `mongodb://${DB.CLIENT.HOST}/${DB.NAME}`;

const startServer = (app) => {
  app.listen(SERVER.PORT, SERVER.HOST, (err) => {
    if (err) {
      /* eslint-disable no-console */
      console.log(err);

      return;
    }

    console.log(`Server is listening on port: ${SERVER.PORT}.`);
  });
};


export {
  createMongooseConnectionPath,
  startServer,
};
