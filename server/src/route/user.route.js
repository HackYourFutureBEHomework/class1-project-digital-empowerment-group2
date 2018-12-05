const users = require('../controller/user.controller.js');

module.exports = (app) => {
  app.get('/me', users.findId);
  app.post('/register', users.createUsers);
  app.post('/login',users.login);
  app.get('/logout',users.logout);
  //app.get('/me', users.hide);
//   app.delete('/module/:id', modules.destroy);
//   app.patch('/module/:id', modules.update);
};