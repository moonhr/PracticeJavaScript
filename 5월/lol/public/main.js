//nameCheck 모듈을 가져오기
import { memberNames } from "../module/namedata.js"
// const memberNames = require("../module/namedata.js")
// import { chamCheck } from "../module/chamCheck.js";
// const nameCheck = require("node:fs"); 이건 Node방식


const chamInput = document.getElementById("cham");
const input = document.getElementById("submit");


//* addEventListener는 함수를 보내주지 않으면 다시 호출되지 않음.
const nameInput = document.getElementById("name");
const lineInput = document.getElementById("line");



function nameCheck(){
  let nameMenu = document.getElementById('name.menu')
  //includes메서드는 배열에 ()가 있는지 참거짓을 테스트함
  let student = memberNames.includes(nameInput.value)

  console.log(student)
  console.log(nameInput.value)

  if(student){
    nameMenu.style.color = "rgba(255,255,255,1)";
  } else {
    nameMenu.style.color = "rgba(255,255,255,0.2)";
  }
}

function lineCheck(){
  let lineMenu = document.getElementById("line.menu");

  console.log("lineCheck 작동중")
  if(lineInput){
    lineMenu.style.color = "rgba(255,255,255,1)";
  } else {
    lineMenu.style.color = "rgba(255,255,255,0.2)";
  }
}


nameInput.addEventListener('blur',nameCheck);
lineInput.addEventListener('change',lineCheck);



console.log("ㅏㅏ");