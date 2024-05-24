// const fs = require("fs");

// const chamName = JSON.parse(fs.readFileSync("../champion.json"));
import { chamName } from "../champion.json";
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

console.log(cham);

export function chamCheck(chamValue){
  cham.forEach(element => {
    if(chamValue === element){
      console.log("yes");
    } else {
      console.log("no");
    }
  });
};