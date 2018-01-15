import utils from 'server/utils';
import configs from 'common/configs/test';


const { DB, SERVER } = configs;

describe('utils', () => {
  describe('createMongooseConnectionPath', () => {
    it('should return correct mongoose connection path', () => {
      expect(utils.createMongooseConnectionPath())
        .toBe(`mongodb://${DB.CLIENT.HOST}/${DB.NAME}`);
    });
  });

  describe('startServer', () => {
    let app;

    beforeEach(() => {
      app = { listen: jest.fn() };
    });

    it('should call app listen method', () => {
      utils.startServer(app);

      expect(app.listen.mock.calls.length).toBe(1);
    });

    it('should call app listen method with correct arguments', () => {
      utils.startServer(app);

      const args = app.listen.mock.calls[0];

      expect(args[0]).toBe(SERVER.PORT);
      expect(args[1]).toBe(SERVER.HOST);
      expect(typeof args[2]).toBe('function');
    });
  });
});
