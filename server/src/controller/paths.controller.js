const Paths = require('../paths/paths.model');

exports.findAll = (req, res) => {
  Path.find()
    .then((paths) => { res.send(paths); })
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

// exports.create = (req, res) => {
//   const newModule = new Module(req.body);
//   newModule
//     .save()
//     .then((data) => { res.send(data); })
//     .catch((err) => {
//       res.status(500).send({ message: err.message });
//     });

// };


// exports.update = (req, res) => {
//   // const {id} = new Module(req.body);
//   const {title}= req.body
//    const {id}=req.params
//     Module.findOneAndUpdate({_id:id}, req.body, {new: true})
//     .then((data) => { res.send(data); })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message
//       });
//     });
// };

// exports.destroy = (req, res) => {
//  const {id}=req.params
//   Module.remove({_id:id})
//   .then((data) => { res.send(data); })
//   .catch((err) => {
//     res.status(500).send({
//       message: err.message
//     });
//   });
// };





