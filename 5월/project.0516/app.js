const http = require('http');
const fs = require('fs');
const qs = require('node:querystring');

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

    if(request.url.startsWith("/test")) {
      const inputData = request.url.split("?")[1];
      const data = qs.decode(inputData);
      console.log(data.type);
      const name = data.name;
      const content = data.content;

      fs.writeFile( name + '.html', content, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });

    }
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