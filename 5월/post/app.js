const http = require('http');
const fs = require('fs');
const qs = require('node:querystring');
const path = require('path');

const server = http.createServer((request, response) => {
  if(request.method === "GET") {
    if(request.url === "/") {

      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
      const htmlData = fs.readFileSync("./index.html", "utf8");  
      response.write(htmlData);
      response.end();
    }
  } else if (request.method === "POST") {
    if (request.url === "/post"){
      let body = "";
      request.on("data", (chunk) => {
        body += chunk.toString();
      });
      request.on("end", () => {
        const parsedData = new URLSearchParams(body);
        const content = parsedData.get("content");
        const jsonData = {
          content: content
        };
        const jsonDataString = JSON.stringify(jsonData, null, 2);
        fs.writeFile(path.join(__dirname, "data.json"), jsonDataString, (err) => {
          if (err) {
            response.writeHead(500, {"Content-Type": "text/plain; charset=utf-8"});
            response.end("서버 자체 에러");
            return;
          }
          response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
          let jsonResponse = JSON.stringify({message: "데이터가 성공적으로 저장됨"});
          response.end(jsonResponse);
        });
      });
    } else {
      response.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"});
      response.end("404 code는 페이지를 찾을 수 없음");
    }
  } else {
    response.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"});
    response.end("404 code는 페이지를 찾을 수 없음");
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});