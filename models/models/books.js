const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
    min: 4,
    max: 20,
    unique: true,
  },
  author: {
    type: String,
    required: true,
    unique: true,
    
  },
  publication: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);