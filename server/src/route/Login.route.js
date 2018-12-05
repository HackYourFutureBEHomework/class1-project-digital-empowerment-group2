const Logins = require('../controller/Login.controller');

module.exports = (app) => {
  app.get('/api/Login', Logins.findAll);
  // app.post('/register', Logins.createUsers);
  // app.post('/login',Logins.login);
  // app.get('/logout',Logins.logout);
};
