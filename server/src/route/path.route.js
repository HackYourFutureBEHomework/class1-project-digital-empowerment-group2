//const modules = require('../controller/module.controller.js');
const paths = require('../controller/path.controller.js');

module.exports = (app) => {
  app.get('/path', paths.findAll);
  //app.get('/path', paths.findOne);
  app.post('/path', paths.create);
  //app.post('/path/:path_id/module', paths.module.create);
  //app.post('/path/:path_id/duplicate', paths.duplicate); 
  app.delete('/path/:id', paths.destroy);
  app.patch('/path/:id', paths.update);


  


 
};
