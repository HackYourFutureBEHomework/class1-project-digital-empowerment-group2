const Logins = require('../controller/Login.controller');

module.exports = (app) => {
  app.get('/api/Login', Logins.findAll);
//   app.post('/module', modules.create);
//   app.delete('/module/:id', modules.destroy);
//   app.patch('/module/:id', modules.update);
};
