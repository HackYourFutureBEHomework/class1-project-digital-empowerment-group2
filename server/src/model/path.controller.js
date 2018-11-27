const Module = require('../model/module.model');
const path =require('../model/path.model')
const mongoose = require('mongoose');


exports.findAll = (req, res) => {
  path.find()
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

exports.create = async(req, res) => {
  const newPath = new Path(req.body);
  console.log(req.body)
  if (newPath.modules.length>0){
    newPath.modules= await Promise.all(newPath.modules.map(async(moduleId)=>{
      const mod = await Module.findById(moduleId);
      mod._id=mongoose.Types.ObjectId();
      mod.isNew=true;
      const newMod = new Module(mod);
      await newMod.save();
      return newMod._id
    }))

};


// exports.update = (req, res) => {
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





