//메서드 사용
const fs = require('fs');
const http = require('http');

//매개변수가 문자열일 경우 변수가 객체로 반환
function loadPokemonNames(path) {
  try {


    if (typeof(path) === "string") {
      const pokemonValue = fs.readFileSync(path, 'utf8');
      return JSON.parse(pokemonValue);
    } 
    // else 를 사용하는 대신 try catch 문법을 사용해서 에러를 잡아내는 것이
    // '에러 처리'라는 것을 명시적으로 이야기 하는 좋은 어휘

  } catch (error) {


    // 매개변수 error는 catch구문이 실행될 때 자동으로 전달되는 변수
    console.error("에러 내용:", error);


  }
}

//함수에 포켓몬 이름 파일 포함하여 할당
const data = loadPokemonNames("./pokemonNames.json");
// console.log(data);


// //* 폴더 생성 후 안에 각 원소명이 담긴 html 생성
// fs.mkdir('poketmons',(err) => {
//   if (err) throw err;}); 

// //* No.0포켓몬.html 생성
// function makeHtml(){
//   for(let i=0; i<data.length; i++){

//     let name = `
//     <!DOCTYPE html>
//     <html lang="ko">
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>${data[i]}</title>
//       </head>
//       <body>
//         <h1>${data[i]}</h1>
//       </body>
//     </html>`

//   fs.writeFile(`./poketmons/No.${i+1}${data[i]}.html`, name, (err) => {
//     if (err) throw err;
//     // console.log('The file has been saved!');
//   });
//   }
// };
// makeHtml();

//* 랜덤 함수
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

//* 랜덤으로 뽑아 하나씩 담음
function poketmonSeletor(array){
  let random = getRandomInt(0, array.length);
  return array[random]
}



function selectBox(){
  const button = document.getElementById('button');
  button.addEventListener('click',() => {
    poketmonSeletor(data);
  })
}



const server = http.createServer((req, res) => {
  
  console.log(req.url);
  
  if(req.url === "/favicon.ico")
    return;
  // let showPoketmon = poketmonSeletor(data);
  if(req.url === "/")
  {
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html; charset=utf-8");
    res.write(`
    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>poketmon</title>
      </head>
      <body>
        <h3>너의 포켓몬은?</h3>
        <p></p>
        <button id="button">다시 고르기</button>
      </body>
      <script src="client.js">
      </script>
    </html>`); 
    res.end();
  }

  if(req.url === "/client.js"){
    fs.readFile("client.js",(err,data)=> {
      if(err) return;
      
      res.statusCode = 200;
      res.setHeader("Content-Type","text/javacript");
      res.end(data);
    })
  }

  if(req.url === "/pokemonData"){
    const jsonData = JSON.stringify(poketmonSeletor(data))
    res.statusCode = 200;
    res.setHeader("Content-Type","application/json");
    res.end(jsonData);
  }
})

server.listen(8000, (err) => {
  if(err) {
    console.log('에러', err);
  } else {
    console.log('서버작동');
  }
})