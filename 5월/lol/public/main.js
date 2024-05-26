//nameCheck 모듈을 가져오기
// import { nameCheck } from "../module/nameCheck.js"
// import { chamCheck } from "../module/chamCheck.js";
// const nameCheck = require("node:fs"); 이건 Node방식

const nameInput = document.getElementById("name");
const chamInput = document.getElementById("cham");
const lineInput = document.getElementById("line");
const input = document.getElementById("submit");


//* addEventListener는 함수를 보내주지 않으면 다시 호출되지 않음.
// nameInput.addEventListener('blur',check1);
// chamInput.addEventListener('blur',check2);
// function menu100{
  
// }


// function check1(){
//   nameCheck(nameInput,input);
// }

function nameCheck(nameInput, submit){

  //includes메서드는 배열에 ()가 있는지 참거짓을 테스트함
  const student = memberNames.includes(nameInput.value)

  console.log(student)
  console.log(nameInput.value)

  if(student){
    submit.style.display = 'block';
    console.log('있음');
  } else {
    submit.style.display = 'none';
    console.log('아님');
  }
}

// function check2(){
//   chamCheck(chamInput);
// }



console.log("ㅏㅏ");

//챔피언 선택함수
