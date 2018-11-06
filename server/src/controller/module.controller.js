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


// for updating input
// exports.update = (req, res) =>{

// }
// exports.product_update = function (req, res) {
//   Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
//       if (err) return next(err);
//       res.send('Product udpated.');
//   });
// };


//deleting 
// exports.product_delete = function (req, res) {
//   Product.findByIdAndRemove(req.params.id, function (err) {
//       if (err) return next(err);
//       res.send('Deleted successfully!');
//   })
// };