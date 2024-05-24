const http = require("http");
const fs = require("fs");
const chamName = require("./champion.json")
const mamberName = require("./module/namedata")

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
    getResponse('/', './public/index.html', 'text/html; charset=utf-8');
    getResponse('/favicon.ico', './favicon.ico', 'image/vnd.microsoft.icon;');
    getResponse('/main.js', './public/main.js', 'text/javascript;');
    // getResponse('/', './public/index.html', 'text/html; charset=uft-8');
  }
  //* POST 요청 시 응답
  if(req.method === "POST") {
    let body = "";
    req.on('data',  (data) => body += data );
    req.on('end', () => {
      let bodyObj =JSON.parse(body);
      let id = bodyObj.id;
      let value = bodyObj.value;
      
      //* 이름 확인
      if(id == "name"){
        nameCheck(value, res);
      }

      res.statusCode = 200;
      res.end();
    })
  } else {
    res.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"});
    res.end("404 code는 페이지를 찾을 수 없음");
  }
  console.log("요청 URL 검사 :", req.url);
});


//* 챔피언 이름만 담을 빈 배열 만들기
let cham = [];
//* json 데이터에서 이름 객체 뽑아서 배열에 밀어넣기
for(let data in chamName){
  if(data === "data"){
    for(let a in chamName[data]){
      for(let b in chamName[data][a]){
        if(b === 'name'){
          // console.log(chamName[data][a][b]);
          // let cham = [];
          cham.push(chamName[data][a][b]);
        }
      }
    }
  }
}
//* 챔피언 검사 함수
function chamCheck(value, res){
  const champion = cham.find(str => str === value);
  if(champion){
    res.statusCode = 200;
    res.end();
  }
  else{
    res.statusCode = 204;
    res.end();
  }
}
//* 이름 검사 함수
function nameCheck(value, res){
  const names = cham.find(str => str === value);
  if(names){
    res.statusCode = 200;
    res.end();
  }
  else{
    res.statusCode = 204;
    res.end();
  }
}



const PORT = 8080;
server.listen(PORT, function(err) {
  if(err) {
    console.log(err);
  }
  console.log("서버 돌아감");
  console.log(`http://localhost:${PORT}`);
})

