const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response){
  if(request.method === "GET") {
    //* 인덱스 홈화면 연결
    if(request.url === "/") {

      const first = fs.readFileSync("./public/index.html", "utf8");
      
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(first);
      response.end();
    }
    //* 파비콘연결
    if(request.url === "/favicon.ico"){
      console.log('favicon나와라');

      const favicon = fs.readFileSync("./favicon.ico");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'image/vnd.microsoft.icon;');
      response.write(favicon);
      response.end();
    }
    //* 스타일css 연결
    if(request.url === "/style.css") {
      const second = fs.readFileSync("./public/style.css");
      
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/css; charset=utf-8');
      response.write(second);
      response.end();
    }
    //* 메인js 연결
    if(request.url === "/main.js") {
      const third = fs.readFileSync("./public/main.js");
      
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/javascript; charset=utf-8');
      response.write(third);
      response.end();
    }
    //* vietnam 페이지 연결
    if(request.url === "/vietnam.html"){
      const vietnam = fs.readFileSync("./public/vietnam.html", "utf8");
      
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(vietnam);
      response.end();
    }
    //* taiwan 페이지 연결
    if(request.url === "/taiwan.html"){
      const taiwan = fs.readFileSync("./public/taiwan.html", "utf8");
      
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(taiwan);
      response.end();
    }
    //* japan 페이지 연결
    if(request.url === "/japan.html"){
      const japan = fs.readFileSync("./public/japan.html", "utf8");
      
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(japan);
      response.end();
    }
    //* korea 페이지 연결
    if(request.url === "/korea.html"){
      const korea = fs.readFileSync("./public/korea.html", "utf8");
      
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(korea);
      response.end();
    }
    //* index 페이지 연결
    if(request.url === "/index.html"){
      const korea = fs.readFileSync("./public/index.html", "utf8");
      
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(korea);
      response.end();
    }


    //* vietnam 이미지 연결
    if(request.url === "/img/vietnam.PNG"){
      const vietnamImg = fs.readFileSync("../project4.0514/img/vietnam.png");

      response.statusCode = 200;
      response.setHeader('Content-Type', 'image/png');
      response.write(vietnamImg);
      response.end();
    }
    //* taiwan 이미지 연결
    if(request.url === "/img/taiwan.PNG"){
      const taiwanImg = fs.readFileSync("../project4.0514/img/taiwan.png");

      response.statusCode = 200;
      response.setHeader('Content-Type', 'image/png');
      response.write(taiwanImg);
      response.end();
    }
    //* japan 이미지 연결
    if(request.url === "/img/japan.PNG"){
      const japanImg = fs.readFileSync("../project4.0514/img/japan.png");

      response.statusCode = 200;
      response.setHeader('Content-Type', 'image/png');
      response.write(japanImg);
      response.end();
    }
    //* korea 이미지 연결
    if(request.url === "/img/korea.PNG"){
      const koreaImg = fs.readFileSync("../project4.0514/img/korea.png");

      response.statusCode = 200;
      response.setHeader('Content-Type', 'image/png');
      response.write(koreaImg);
      response.end();
    }

    console.log(request.url);
  }
});

server.listen(8080, ()=>{
  console.log('http://localhost:8080');
});