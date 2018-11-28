const modules = require('../controller/module.controller.js');
const paths = require('../controller/path.controller.js');

module.exports = (app) => {
  app.get('/path', paths.findAll);
  app.get('/path/:pathId', paths.findOne);
  app.post('/path', paths.create);
  app.post('/path/:pathId/module', modules.create);
  //app.post('/path/:path_id/duplicate', paths.duplicate); 
  app.delete('/path/:pathId', paths.destroy);
  app.patch('/path/:pathId', paths.update);


  


 
};
