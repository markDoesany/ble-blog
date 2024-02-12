const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

//connect to mongodb
const dbURI = 'mongodb+srv://smokey_0001:TriuneGod143@nodetuts.mzqdllw.mongodb.net/nodeDB?retryWrites=true&w=majority'

mongoose.connect(dbURI)
.then((result)=>{
  console.log('Connected to db'); 
  //listen for request
  app.listen(3000)
})
.catch((err)=>{
  console.log(err)
})

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('public'));
app.use(express.urlencoded( {extended: true }))
app.use(morgan('dev'));


app.get('/', (req, res) => {
  res.redirect('/blogs');
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
})

//Blog routes
app.use('/blogs', blogRoutes)

//404 page
app.use((req, res)=>{
  res.render('404', { title: '404' });
})