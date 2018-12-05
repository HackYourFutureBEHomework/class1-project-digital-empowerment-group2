const mongoose = require('mongoose');


const LonginSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Login', LonginSchema);