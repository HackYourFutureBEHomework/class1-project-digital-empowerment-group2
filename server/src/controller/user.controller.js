const config = require('../../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../model/user.model');
const VerifyToken = require('./VerifyToken');

exports.createUsers=(req, res)=> {
    //  const newUser = new User(req.body);
      var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
      //console.log(hashedPassword);
      User.create({
        name : req.body.name,
        email : req.body.email,
        password : hashedPassword
      },
      (err, newUser) =>{
        if (err) return res.status(500).send("There was a problem registering the user.")
        // create a token
        const token = jwt.sign({ id: newUser._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
      }); 
    };
    
    exports.findId=(req , res, next) =>{
      const token = req.headers['x-access-token'];
      if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      
      jwt.verify(token, config.secret, function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        
        User.findById(decoded.id, function (err, user) {
          if (err) return res.status(500).send("There was a problem finding the user.");
          if (!user) return res.status(404).send("No user found.");
          
          res.status(200).send(user);
        });    });
    };
    
    exports.login=(req, res) =>{
  
      User.findOne({ email: req.body.email }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        var token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
      });
    };
  
    exports.logout=(req, res) =>{
      res.status(200).send({ auth: false, token: null });
  };