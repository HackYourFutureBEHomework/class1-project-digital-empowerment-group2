const Module = require('../model/module.model');

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
    .then((data) => { res.send(data); })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  Module.findOneAndUpdate({ _id: id }, { title }, { new: true })
    .then((mod) => {
      if (!mod) {
        return res.status(404).send({
          message: `Module with id "${id}" not found`
        });
      }
      return res.send(mod);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: `Module with id "${id}" not found`
        });
      }
      return res.status(500).send({ message: err.message });
    });
};

exports.destroy = (req, res) => {
  const { id } = req.params;
  Module.remove({_id:id})
    .then((mod) => {
      if (!mod) {
        return res.status(404).send({
          message: `Module with id "${id}" not found`
        });
      }
      return res.status(204).send({ message: 'Module deleted successfully!' });
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: `Module with id "${id}" not found`
        });
      }
      return res.status(500).send({ message: err.message });
    });
};

