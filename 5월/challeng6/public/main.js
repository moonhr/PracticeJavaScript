const root = document.getElementById('root');
const fieldset = document.getElementsByTagName('fieldset');
const input = document.getElementsByTagName('input');
const light = document.getElementsByClassName('light');
const complete = document.getElementById('complete');

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

let lightStatus = [false, false, false, false, false];

function greenLight(n) {
  light[n].style.backgroundColor = 'rgba(74, 255, 81, 1)';
  lightStatus[n] = true;
  checkComplete();
}

function redLight(n) {
  light[n].style.backgroundColor = 'rgba(255, 74, 74, 1)';
  lightStatus[n] = false;
  checkComplete();
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

/**
 ** 휴대폰 번호 검사
 */
function numberCheck() {
  if (number.value.length === 11) {
    greenLight(4);
    return;
  } else {
    redLight(4);
  }
}


/**
 ** 이벤트 작동 함수 모음
 */
document.addEventListener('DOMContentLoaded',()=>{
  username.addEventListener('input', nameCheck);
  password.addEventListener('input', passwordCheck);
  password2.addEventListener('input', passwordDoubleCheck);
  email.addEventListener('input', emailCheck);
  number.addEventListener('input', numberCheck)
})

/**
 * *함수모음
 */

const formValidation = [
  nameCheck,
  passwordCheck,
  passwordDoubleCheck,
  emailCheck,
  numberCheck
]

/**
** 모두 참이면 활성화 아니면 원래상태
*/
function checkComplete() {
  //함수를 모두 통과하는지 테스트
  if (lightStatus.every(status => status === true)) {
    complete.classList.add('green');
    complete.innerText = '작성완료!';
    console.log('완료');
    return;
  } else {
    complete.classList.remove('green');
    complete.innerText = '작성중';
  }
}

/**
 ** 버튼 활성화 문구
 */
complete.addEventListener('click', (event) => {
  //모두 초록불이 아니라면
  if (!lightStatus.every(status => status)) {
    event.preventDefault();
    alert('모든 필드를 올바르게 작성해 주세요.');
  } else {
    alert('완료되었습니다.');
  }
});

checkComplete();


