const http = require('http');
const fs = require('fs');
const qs = require('node:querystring');

const server = http.createServer((request, response) => {
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

getResponse('/', './public/index.html', 'text/html; charset=uft-8');
getResponse('/style.css', './public/style.css', 'text/css;');
getResponse('/main.js', './public/main.js', 'text/javascript;');
getResponse('/backgroungImg.jpeg', './backgroungImg.jpeg', 'image/jpeg;');
getResponse('/favicon.ico', './star.favicon.png', 'image/vnd.microsoft.icon;');


if (request.method === "POST") {
  
  //* 데이터의 몸체
  //* 왜 데이터의 몸체를 왜 따로 설정하는가.
  //* 이유는 데이터가 크게 들어오면, 잘라서 들어오기 때문에
  let body = "";

  //빈 문자열을 만들어 그 안에 data를 삽입하는 형태이다.
  //* 잘게들어온 데이터를 body에 + 하여 완성된 데이터를 만드는 과정
  request.on("data", (data) => {
    body += data;
    // body에 data를 추가한다.
  });

  //* 모든 데이터가 들어왔다는 신호 'end'
  request.on("end", () => {
    
    //* 데이터가 쿼리스트링일 경우에만 qs.parse를 사용함.
    //* 클라이언트에서 POST 방식으로 보낼 경우 데이터는 JSON형태로 들어오게 된다.
    //* 그래서 우리가 해야될 작업은 JSON -> Object(객체)로 바꿔주는 작업을 해야된다.
    
    //* 1. JSON을 Object로 변환
    //* 2. Object를 이용해서 어떻게 데이터를 가공할 건지.
    //* 3. 완료된 작업을 클라이언트에게 응답
    let parse = qs.parse(body);
    //받아온 data 값 - body를 parse 한다.

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
