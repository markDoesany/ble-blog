const express = require('express');
const Blog = require('../models/blog');
const BlogControllers = require('../controllers/blogControllers')

const router = express.Router();

//mongoose and sandbox routes
router.get('/add-blog', BlogControllers.addBlog)

router.get('/', BlogControllers.getAllBlogs)

router.post('/', BlogControllers.createBlog)

router.get('/create', (req, res)=>{
  res.render('create', { title: 'Create a new blog' });
})

router.get('/:id', BlogControllers.getBlog)

router.delete('/:id', BlogControllers.deleteBlog);

module.exports =  router;