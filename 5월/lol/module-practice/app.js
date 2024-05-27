const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  //* GET 요청 시 응답
  if(req.method === "GET") {
    const getResponse = (url, filePath, contentType) => {
      if(req.url === url){
        const file = fs.readFileSync(filePath);
        res.statusCode = 200;
        res.setHeader('Content-Type', contentType);
        res.write(file);
        res.end();
        return;
      }
    }
    getResponse('/', './index.html', 'text/html; charset=utf-8');
  }
})


const PORT = 8080;
server.listen(PORT, function(err) {
  if(err) {
    console.log(err);
  }
  console.log("서버 돌아감");
  console.log(`http://localhost:${PORT}`);
})

