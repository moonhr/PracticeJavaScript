/**
  * * 24.05.08 문혜림
  * * node로 인스턴트 서버 구축하기
  */
// http모듈 가져오기
const http = require('node:http');

// 인스턴트서버 생성
var server = http.createServer(function(request,response){ 

  response.writeHead(200,{'Content-Type':'text/html'});
  response.end('Hello node.js!!');

});

// 8080은 서버 주소이며 실행확인을 위한 콘솔을 작성
server.listen(8080, function(){ 
  console.log('Server is running...');
}); 