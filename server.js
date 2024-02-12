const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res)=>{
  console.log(req.url, req.method)

  let path = './views/'

  switch(req.url){
    case '/':
        path += 'index.html'
        res.statusCode = 200
        break
    case '/about':
        path += 'about.html'
        res.statusCode = 200
        break
    case '/about-me':
        res.statusCode = 301
        res.setHeader('Location', '/about')
        res.end()
        break
    default:
        path += '404.html'
        res.statusCode = 404
        break
  }

  //set header
  res.setHeader('Content-Type', 'text/html')

  fs.readFile(path, (err, data)=>{
    if(err){
      console.log(err)
      res.end()
    }
    else{
      res.end(data)
    }
  })
})

server.listen(3000, ()=>{
  console.log('Listening for request at port 3000')
})