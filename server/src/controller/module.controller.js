const Module = require('../model/module.model');
const paths = require ('./path.controller');

exports.findAll = (req, res) => {
  Module.find()
    .then((modules) => { res.send(modules); })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.create = (req, res) => {
  const newModule = new Module(req.body);
  newModule
    .save()
    .then(async (createdModule) => {
      const { pathId } = req.params;
      if (pathId) await paths.addModuleToPath(pathId, createdModule._id);
      res.send(createdModule);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};


exports.update = (req, res) => {
  const {title}= req.body
   const {id}=req.params
    Module.findOneAndUpdate({_id:id}, req.body, {new: true})
    .then((data) => { res.send(data); })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.destroy = (req, res) => {
 const {id}=req.params
  Module.remove({_id:id})
  .then((data) => { res.send(data); })
  .catch((err) => {
    res.status(500).send({
      message: err.message
    });
  });
};





