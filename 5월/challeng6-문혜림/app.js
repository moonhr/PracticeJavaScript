const http = require('http');
const fs = require('fs');
const qs = require('node:querystring');

const server = http.createServer((request, response) => {
  //*데이터 경로 함수
  const getResponse = (url, filePath, contentType) => {
    if(request.url === url){
      const file = fs.readFileSync(filePath);
      response.statusCode = 200;
      response.setHeader('Content-Type', contentType);
      response.write(file);
      response.end();
    }
  }

  module.exports = getResponse;

  //*html, css, js, jpge, favicon
  getResponse('/', './public/index.html', 'text/html; charset=uft-8');
  getResponse('/style.css', './public/style.css', 'text/css');
  getResponse('/main.js', './public/main.js', 'text/javascript');
  getResponse('/backgroungImg.jpeg', './backgroungImg.jpeg', 'image/jpeg');
  getResponse('/favicon.ico', './star.favicon.png', 'image/vnd.microsoft.icon');
  getResponse('/test', './public/index.html', 'text/html; charset=utf-8');



  if (request.method === "POST" && request.url === "/test") {

    let body = "";

    request.on("data", (data) => {
      body += data;
    });

    request.on("end", () => {
      //JSON을 객체로 파싱하기
      let post = JSON.parse(body);
      const {username, password, email, number} = post;

      // 파일 생성 변수
      const fileName = `data/${username}.txt`;
      const fileContent = `Name: ${username}\nPassword: ${password}\nEmail: ${email}\nNumber: ${number}`;

      fs.writeFile(fileName, fileContent, (err) => {
        if (err) {
          response.statusCode = 500;
          response.end("File save error");
          throw err;
        }
        response.statusCode = 302;
        response.setHeader("Location", "/");
        response.end();
      });
      
    });

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
