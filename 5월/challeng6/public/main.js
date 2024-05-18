const root = document.getElementById('root');
const fieldset = document.getElementsByTagName('fieldset');
const input = document.getElementsByTagName('input');
const light = document.getElementsByClassName('light');

/**
 ** 이름 데이터
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
 ** input태그 id 가져오기
 */
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('passwordCheck');
const email = document.getElementById('email');
const number = document.getElementById('number');

function greenLight(n) {
  light[n].style.backgroundColor = 'rgba(74, 255, 81, 1)';
}

function redLight(n) {
  light[n].style.backgroundColor = 'rgba(255, 74, 74, 1)';
}

/**
 ** 이름 검사 함수
 */
function nameCheck() {
  for (let name of names) {
    if (username.value === name) {
      greenLight(0);
      break;
    } else {
      redLight(0);
    }
  }
}

/**
 ** 패스워드 검사
 */
function passwordCheck() {
  //입력값을 배열로 저장
  let passwordValue = password.value;
  let value = [];
  for (let i = 0; i < passwordValue.length; i++) {
    value.push(passwordValue[i]);
  }

  //문자열과 숫자를 나눠줄 변수
  let testName = '';
  let testNumber = '';
  //forEach로 입력값을 통과하는 문자와 숫자 분리하여 변수에 담기
  value.forEach(element => {
    //inNaN 문자면 true 숫자면 false
    if (isNaN(element) === true) {
      testName += element;
    } else {
      testNumber += element;
    }
  });

  //불 켜줄 스위치
  let isGreen = false;

  //문자열이 이름에 일치하고 숫자 길이가 4라면 스위치가 true
  names.forEach(name => {
    if (name === testName) {
      if (testNumber.length === 4) {
        isGreen = true;
      }
    }
  });
  //스위치가 true라면 초록불 아니라면 빨간불
  if (isGreen === true) {
    greenLight(1);
  } else {
    redLight(1);
  }
}

/**
 ** 패스워드 확인 검사
 */
function passwordDoubleCheck() {
  if (password.value === password2.value) {
    greenLight(2);
    return;
  } else {
    redLight(2);
  }
}




username.addEventListener('input', nameCheck);


password.addEventListener('input', passwordCheck);




password2.addEventListener('input', passwordDoubleCheck);

/**
 ** 이메일 확인 검사
 */
function emailCheck() {
  //이메일 구분점
  let atSplit = email.value.split('@')
  let dotSplit = email.value.split('.')

  if (atSplit.length == 2 || dotSplit.length == 2) {
    if (typeof (atSplit[0]) === 'string' || typeof (atSplit[1]) === 'string') {
      if (typeof (dotSplit[1]) === 'string') {
        if (email.value.indexOf('@') < email.value.indexOf('.')) {
          greenLight(3);
          return;
        }
      }
    }
  }
  redLight(3);
}


email.addEventListener('input', emailCheck);

/**
 ** 휴대폰 번호 검사
 */
number.addEventListener('input', function numberCheck() {
  if (number.value.length === 11) {
    light[4].style.backgroundColor = 'rgba(74, 255, 81, 1)';
    return;
  } else {
    light[4].style.backgroundColor = 'rgba(255, 74, 74, 1)';
  }
})

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