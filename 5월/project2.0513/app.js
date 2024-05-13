const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if(req.method === 'GET'){
    if(req.url === '/'){
      const first = fs.readFileSync("./public/index.html", "utf8");
      
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.write(first);
      res.end();
    }
    if(req.url === '/style.css'){
      const second = fs.readFileSync("./public/style.css");
      
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/css; charset=utf-8');
      res.write(second);
      res.end();
    }
    if(req.url === "/main.js"){
      const third = fs.readFileSync("./public/style.css");
      
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
      res.write(third);
      res.end();
    }
  }
})

server.listen(3000);