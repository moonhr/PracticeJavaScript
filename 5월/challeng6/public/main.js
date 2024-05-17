const root = document.getElementById('root');
const fieldset = document.getElementsByTagName('fieldset');
const input = document.getElementsByTagName('input');
const ligth = document.getElementsByTagName('fieldset').children[1].children[1];
console.log(ligth);

/**
 * 이름 데이터
 */
const names = [
  "구하림",
  "김보미",
  "김수현",
  "김정수",
  "문혜림",
  "배성빈",
  "백지원",
  "송이현",
  "신지윤",
  "유으뜸",
  "유호영",
  "이연승",
  "이재영",
  "이종수",
  "임유진",
  "정호연",
  "조우식",
  "조자연",
  "최유진",
  "황재민"
]; 

/**
 * input태그 id 가져오기
 */
const username = document.getElementById('username');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('passwordCheck');
const email = document.getElementById('email');
const number = document.getElementById('number');

/**
 * 글자수 제한하기
 */

/**
 * 이름 배열에서 하나씩 꺼내기
 */
names.forEach((name) => {
  console.log(name);
});

// function nameCheck(){
//   if(){

//   }
//   return
// }


function formValidation(){

}

// function nameCheck(Array){
//   for(let i = 0; i < Array.length; i++){
//     let name = array[i];
//     console.log(name);
//   }
// }