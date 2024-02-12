const Blog = require('../models/blog');

const addBlog = (req, res) =>{
  const blog = new Blog({
    title: 'new blog 2',
    snippet: 'About new blog',
    body: 'About the new blog that is just created'
  })

  blog.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
      console.log(err)
    })
}

const getAllBlogs = (req, res) =>{
  Blog.find().sort( { createdAt: -1} )
  .then(result => {
    res.render('index', { title: 'All Blogs',  blogs: result })
  })
  .catch(err => {
    console.log(err)
  })
}

const getBlog = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render('details', { title: 'Blog Details', blog: result})
    })
    .catch((err) => {
      console.log(err)
    })
}

const createBlog = (req, res) => {
  const blog = new Blog(req.body)
  blog.save()
    .then( data =>{
      res.redirect('/blogs')
    })
    .catch(err => {
      console.log(err)
    })
}

const deleteBlog = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
  .then((result) => {
    res.send({ redirect: '/' })
  })
  .catch((err) => {
    console.log(err)
  })
}

module.exports = {
  addBlog,
  getAllBlogs,
  createBlog,
  getBlog,
  deleteBlog
}