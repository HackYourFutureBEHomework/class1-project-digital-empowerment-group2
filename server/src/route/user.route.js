const users = require('../controller/user.controller.js');

module.exports = (app) => {

    app.get('/me', users.findId);
    app.post('/register', users.createUsers);
    app.post('/login',users.login);
    app.get('/logout',users.logout);
        
    // app.get('/module', modules.findAll);
    // app.post('/module', modules.create);
    // app.delete('/module/:id', modules.destroy);
    // app.patch('/module/:id', modules.update);
};