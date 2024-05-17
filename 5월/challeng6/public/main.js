const root = document.getElementById('root');
const fieldset = document.getElementsByTagName('fieldset');
const input = document.getElementsByTagName('input');
const light = document.getElementsByClassName('light');
console.log(light);

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
const password2 = document.getElementById('passwordCheck');
const email = document.getElementById('email');
const number = document.getElementById('number');

/**
 * 글자수 제한하기
 */

/**
 * 이름 배열에서 하나씩 꺼내기
 */
// names.forEach((name) => {
//   console.log(name);
// })

/**
 * 이름 검사
 */
username.addEventListener('input', function nameCheck(){
  for(let name of names){
    if(username.value === name){
      light[0].style.backgroundColor = 'rgba(74, 255, 81, 1)';
      break;
    } else {
      light[0].style.backgroundColor = 'rgba(255, 74, 74, 1)';
    }
  }
})

/**
 * 패스워드 검사
 */
password.onkeyup = function passwordCheck(){
  // let passwordString = password.value.split(',')[1];
  // let passwordName = password.value.split(',')[0];
  let passwordValue = password.value;
  let test = [];
  for(let i =0; i < passwordValue.length; i++){
    //입력값을 숫자로 받으면 
    test.push(passwordValue[i])
  }


  let testName = '';
  let testNumber = '';
  test.forEach(element => {
    //inNaN 문자면 true 숫자면 false
    // console.log(isNaN (element));
    if(isNaN(element) === true){
      // console.log(`문자:`+element);
      testName += element;
    } else {
      // console.log(`숫자:`+element);
      testNumber += element;
    }
  });

  // console.log(`문자:`+testName);
  // console.log(`숫자:`+testNumber);

  names.forEach(name => {
    if(name === testName){
      console.log(testNumber.length);
      if(testNumber.length === 4){
        console.log("초록불");
        console.log(light[1]);
        light[1].style.backgroundColor = 'rgba(74, 255, 81, 1)';
      }
    } else {
        light[1].style.backgroundColor = 'rgba(255, 74, 74, 1)';
    }
  });


  
  
  // names.forEach(element => {
  //   if(element === '이종수'){
  //     console.log(element);
  //   } else if (element === '문혜림'){
  //     console.log(element);
  //   }
  // });


  // for(let name of names){
  //   if(passwordName === name && passwordString.length === 4){
  //     light[1].style.backgroundColor = 'rgba(74, 255, 81, 1)';
  //     break;
  //   } else {
  //     light[1].style.backgroundColor = 'rgba(255, 74, 74, 1)';
  //   }
  // }

}

/**
 * 패스워드 확인 검사
 */
password2.onkeyup = function passwordDoubleCheck(){
  if(password.value === password2.value){
    light[2].style.backgroundColor = 'rgba(74, 255, 81, 1)';
    return;
  } else {
    light[2].style.backgroundColor = 'rgba(255, 74, 74, 1)';
  }
}

/**
 * 이메일 확인 검사
 */
// email.onkeyup = function emailCheck(){

// }
console.dir(number);
number.onkeyup = function numberCheck(){
  if(number.value === 11){
    light[4].style.backgroundColor = 'rgba(74, 255, 81, 1)';
    return;
  } else {
    light[4].style.backgroundColor = 'rgba(255, 74, 74, 1)';
  }
}

/**
 * *함수모음
 */

// const formValidation = [
//   nameCheck,
//   passwordCheck,
//   passwordDoubleCheck,
//   emailCheck,
//   numberCheck
// ]


/**
** 참이면 초록불
*/
// function formValidation(){
//   if(){
//   }
//   return {for(let i = 0; i < light.length; i++){
//     light[i].style.background = 'rgba(74, 255, 81, 1)';
//   }}
// }

// function nameCheck(Array){
//   for(let i = 0; i < Array.length; i++){
//     let name = array[i];
//     console.log(name);
//   }
// }