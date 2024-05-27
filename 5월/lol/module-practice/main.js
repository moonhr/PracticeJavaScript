import {memberNames} from "./name";

const input = document.getElementById('input');
/**
 * * 2024.05.27
 * * input의 값이 배열에 있으면 반응
 */
function check(){
  let box = document.getElementById('box');
  memberNames.forEach(element => {
    if(input.value = element){
      box.style.backgroundColor = "rgba(255,200,200)";
    } else {
      box.style.backgroundColor = "";
    }
  });
}

/**
 * * 2024.05.27
 * * 위의 함수와 같은 역할을 하지만 배열 메서드가 다른경우
 * * 두 함수다 작동 확인 완료
 */
function check2(){
  let student = memberNames.includes(input.value)
  let box = document.getElementById('box');
  if(student){
    box.style.backgroundColor = "rgba(255,0,255,1)";
    console.log('있음');
  } else {
    box.style.backgroundColor = "rgba(255,255,0,1)";
    console.log('아님');
  }
}

input.addEventListener('input',check2);