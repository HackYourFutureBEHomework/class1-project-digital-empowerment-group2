const mongoose = require('mongoose');


const PathsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
          },

    Modules: String,
    
   
   
  },
  {
    timestamps: true
  }
);

paths.exports = mongoose.model('Paths', PathsSchema);
