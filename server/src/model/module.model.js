const mongoose = require('mongoose');

const ModuleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  },
  
  { 
    completed: true
  }
  
);

module.exports = mongoose.model('Module', ModuleSchema);
