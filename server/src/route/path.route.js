const path = require('../controller/path.controller.js');

module.exports = (app) => {
  app.get('/path', path.findAll);

};
