const paths = require('../controller/paths.controller.js');

module.exports = (app) => {
  app.get('/paths', paths.findAll);
  //app.get('/paths', paths.findAll);
  app.post('/paths', paths.create);
  app.post('/paths/:path_id/module', paths.create);
  app.post('/paths/:path_id/duplicate', paths.create); 
  app.delete('/paths/:id', paths.destroy);
  app.patch('/paths/:id', paths.update);


  // POST /api/paths/:path_id/duplicate --> Duplicate a learning path


 
};
