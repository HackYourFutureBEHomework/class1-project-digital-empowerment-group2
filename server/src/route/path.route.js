const paths = require ('../controller/path.controller.js');
const modules = require('../controller/module.controller.js');

module.exports = (app) => {
    app.get('/path', paths.findAll);
    app.get('/path/:pathId', paths.findAll);
    app.post('/path', modules.create);
    app.post('/path/:pathId/module', modules.create);
    app.patch('/path/:pathId', paths.update);
    app.delete('/path/:pathId', paths.destroy);    
  };