const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    require: require
  },
  snippet:{
    type: String,
    require: require
  },
  body:{
    type: String,
    require: require
  }
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;