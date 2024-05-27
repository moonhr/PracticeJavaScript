// const serverSet = require("./serverset");
import {serverSet} from "./serverset.js";
import http from "http"

serverSet(3000);
console.log(`http://localhost:3000`);

import {chamName} from "./champion.json"
import {mamberName} from "./module/namedata.js"
// const chamName = require("./champion.json")
// const mamberName = require("./module/namedata")

const server = http.createServer((req, res) => {
  if(req.method === "POST") {
    let body = "";
    req.on('data',  (data) => body += data );
    req.on('end', () => {
      let body =JSON.parse(body);
      let id = body.id;
      let value = body.value;
      
      //* 이름 확인
      if(id == "name"){
        nameCheck(value, res);
      }

      res.statusCode = 200;
      res.end();
    })
  }
})

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
  const names = cham.includes(value);
  if(names){
    res.statusCode = 200;
    res.end();
    console.log("ok")
  }
  else{
    res.statusCode = 204;
    res.end();
    console.log("no")
  }
}