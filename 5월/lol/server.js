const http = require("http");
const fs = require("fs");


const server = http.createServer((request, response) => {
  if(request.method === "GET") {
    console.log("요청 URL 검사 :", request.url);

    if(request.url === "/") {

      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
      const htmlData = fs.readFileSync("./public/index.html", "utf8");  
      response.write(htmlData);
      response.end();
    }

    if(request.url === "/main.js"){

      response.statusCode = 200;
      response.setHeader("Content-Type", "text/javascript");
      const jsData = fs.readFileSync("./public/main.js", "utf8");  
      response.write(jsData);
      response.end();
    }
  }

  if(request.url === "/module/nameCheck.js"){

    response.statusCode = 200;
    response.setHeader("Content-Type", "text/javascript");
    const jssData = fs.readFileSync("./module/nameCheck.js", "utf8");  
    response.write(jssData);
    response.end();
  }

});



const PORT = 8080;
server.listen(PORT, function(err) {
  if(err) {
    console.log(err);
  }
  console.log("서버 돌아감");
  console.log(`http://localhost:${PORT}`);
})



const chamName = JSON.parse(fs.readFileSync("./champion.json"));
let dataaaa = [];
for(let data in chamName){
  if(data === "data"){
    for(let a in chamName[data]){
      for(let b in chamName[data][a]){
        if(b === 'name'){
          // console.log(chamName[data][a][b]);
          let cham = [];
          cham.push(chamName[data][a][b]);
          console.log(cham);



        }
      }
    }
  }
}

