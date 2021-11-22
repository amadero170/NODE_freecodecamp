const http = require('http');
server = http.createServer((req,res)=>{
   if(req.url == '/') {
    res.end('Welcome to our home page')
    };
   if(req.url === '/about') {
       res.end('This is our mission and goals')}
    res.end(`
           <h1>Oops, page not found</h1>
           <a href="/"> 'Back to Home page'</a>`
       )
    })

server.listen(5000,()=>console.log('listening on port 5000'))