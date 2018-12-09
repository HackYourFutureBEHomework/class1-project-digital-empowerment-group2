const Path = require('../model/path.model');
const VerifyToken = require('./VerifyToken');

exports.findAll = (req, res) => {
  Path.
  find()
    .then((modules) => { res.send(modules); })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.findOne = (req, res) => {

    Path.
    findById(req.params.pathId)
    .populate('modules')
      .then((path) => { res.send(path); })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
  };

exports.create = (req, res) => {

  const newPath = new Path(req.body);
  newPath
    .save()
    .then((data) => { res.send(data); })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
const config = require('../../config');
const jwt = require('jsonwebtoken');


exports.destroy = (req, res) => {
  console.log(req.body)
  const {token} =req.body
    // req.body.token ||
    // req.query.token ||
    // req.headers['x-access-token'] ||
    // req.cookies.token;

  console.log(token)
  // if (!token)
  //   return res.status(403).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, config.secret, function(err) {
  if (err)
    return res.send({ message: 'Failed to authenticate token.' });
    // if everything good, save to request for use in other routes
    //req.userId = decoded.id;
   // next();
    })
  Path.findOneAndDelete({ _id: req.params.pathId })
  .then((data) => { res.send(data); })
  .catch((err) => {
    res.status(500).send({
      message: err.message
    });
  });

}
exports.update = (req, res) => {
    Path.findOneAndUpdate({ _id: req.params.pathId }, req.body, { new: true })
    .then((data) => { res.send(data); })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.addModuleToPath = async (pathId, moduleId) => {
    const path = await Path.findById(pathId);
    path.modules.push(moduleId);
    await path.save();
    return Path.findOneAndUpdate({ _id: pathId }, path, { new: true });
  };