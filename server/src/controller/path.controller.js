const Path = require('../model/path.model');
// const jwt = require('jsonwebtoken');

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

exports.destroy = (req, res) => {
  Path.findOneAndDelete({ _id: req.params.pathId })
  .then((data) => { res.send(data); })
  .catch((err) => {
    res.status(500).send({
      message: err.message
    });
  });
};

// const { JWT_SECRET } = process.env;
exports.update = (req, res) => {  
  // const { token } = req.body;
    // jwt.verify(token , JWT_SECRET, async (err) => {
    //   if (err) return res.send({ message: 'token invalid'});
    // }); 
    // const allTweets = await Tweet.find();
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