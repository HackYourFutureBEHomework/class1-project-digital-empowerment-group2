
const config = require('../../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../model/user.model');

  exports.createUsers=(req, res)=> {
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  User.create({
    name : req.body.name,
    email : req.body.email,
    password : hashedPassword
  },
    (err, newUser) =>{
      if (err) return res.status(500).send("There was a problem registering the user.")
      const token = jwt.sign({ id: newUser._id }, config.secret, {
        expiresIn: 86400 
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
    const {email,password}=req.body;
    // User.findOne({ email })
    // .then(user => {
    //   if (user.length < 1) {
    //     return res.status(401).json({
    //       message: "Auth failed"
    //     });
    //   }
    console.log(email,password)
    User.findOne({ email }, function (err, user) {
      if (err) return res.status(500).send('Error on the server.');
      if (!user) return res.status(404).send('No user found.');
      let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
      let token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 
      });
      res.status(200).send({ auth: true, token: token ,email:email});
      console.log(token)
    });
  };

  exports.logout=(req, res) =>{
    res.status(200).send({ auth: false, token: null });
  };