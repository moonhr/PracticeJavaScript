import chamName from "../module/champion.json" with {type : 'json'}

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


const  nameMenu = document.getElementById('name.menu')
const  lineMenu = document.getElementById('line.menu')
const  championMenu = document.getElementById('champion.menu')

nameMenu.addEventListener('input',sendReq)
lineMenu.addEventListener('input',sendReq)
championMenu.addEventListener('input',sendReq)

//promise값을 반환하는 비동기 함수
async function sendReq(){
  let elem = this;
  //http 요청 생성
  await fetch("http://localhost:8080", {
    method: "POST",
    //body에 json 문자열 반환
    body: JSON.stringify({
      id : elem.id,
      value : elem.value
    }),
  })
  .then(res => {
    if(res.status == 200){
      menuOn(elem.id, true);
    } else{
      menuOn(elem.id, false);
    }

    items["password"].input.dispatchEvent(new Event("input"));
  })  
}

function menuOn(){

}