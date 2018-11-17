const modules = require('../controller/module.controller.js');

module.exports = (app) => {
  app.get('/module', modules.findAll);
  app.post('/module', modules.create);
  app.delete('/module/:id', modules.destroy);
<<<<<<< HEAD
  app.patch('/module/:id', modules.update); 
=======
  app.put('/module/:id', modules.update);



 
>>>>>>> d7fa487073236d12cb2d0933b9b8c61aa343cf40
};
