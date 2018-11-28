const Path = require('../model/path.model');

exports.findAll = (req, res) => {
  Path.find()
    .then((modules) => { res.send(modules); })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.findOne =(req,res)=>{
  path.findById(req.params.pathId)
  .populate('modules')
  .then((path)=>{res.send(path)})
  .catch((err)=>{
    res.status(500).send({message:err.message});
  })
};

// exports.findAll = (req, res) => {
//   Path.find()
//     .then((paths) => { res.send(paths); })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message
//       });
//     });
// };

exports.create = (req, res) => {
  //const { title, module} = req.body;
  const newPath = new Path(req.body);
  newPath
    .save()
    .then((data) => { res.send(data); })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });

};

exports.destroy = (req, res) => {
  const {pathId}=req.params
  Path.remove({_id:pathId})
   .then((data) => { res.send(data); })
   .catch((err) => {
     res.status(500).send({
       message: err.message
     });
   });
 };

exports.update = (req, res) => {
  //const { title, module} = req.body;
  const {title,module }= req.body
   const {pathId}=req.params
   Path.findOneAndUpdate({_id:pathId}, req.body, {new: true})
    .then((data) => { res.send(data); })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
};



exports.addModuleToPath = async (path_Id, moduleId) => {
  const path = await Path.findById(pathId);
  path.modules.push(moduleId);
  await path.save();
  return Path.findOneAndUpdate({ _id: pathId }, path, { new: true });
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

// exports.findAll = (req, res) => {
//   Path.
//   find()
//     .then((modules) => { res.send(modules); })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message
//       });
//     });
// };









