//nameCheck 모듈을 가져오기
import { nameCheck } from "../module/nameCheck.js"
// const nameCheck = require("node:fs"); 이건 Node방식

const nameInput = document.getElementById("name");
const input = document.getElementById("submit");


//* addEventListener는 함수를 보내주지 않으면 다시 호출되지 않음.
nameInput.addEventListener('blur',check);

function check(){
  nameCheck(nameInput,input);
}

