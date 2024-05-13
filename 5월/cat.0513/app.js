const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if(req.method === 'GET'){
    if(req.url === '/'){
      const index = fs.readFileSync("./public/index.html", "utf8");

      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(index);
      response.end();
    }
  }
})

server.listen(3000);