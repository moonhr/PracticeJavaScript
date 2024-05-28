import chamName from "../module/champion.json" 

//* 챔피언 이름만 담을 빈 배열 만들기
let chams = [];
//* json 데이터에서 이름 객체 뽑아서 배열에 밀어넣기
for(let data in chamName){
  if(data === "data"){
    for(let a in chamName[data]){
      for(let b in chamName[data][a]){
        if(b === 'name'){
          // console.log(chamName[data][a][b]);
          // let cham = [];
          chams.push(chamName[data][a][b]);
        }
      }
    }
  }
}
console.log(chams)