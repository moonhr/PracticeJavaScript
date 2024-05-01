let button = document.getElementsByTagName('button');
let redColor = '#FF4646';
let buleColor = '#7DE8FF';

let trueAnswer = document.getElementsByClassName('true')[0];

console.log(trueAnswer);

let flaseAnswer = document.getElementsByClassName('flase')[0];

//변수를 하나만 설정하면 색상이 꼭 순차적으로 변경됨
let moon = true
//그래서 변수를 두개로 나눠줌
let bFalse = true;
let bTrue = true;

function trueColorChange(){
  if(bTrue === true){
    bTrue = false;
    return trueAnswer.style.backgroundColor = buleColor;
  }
}


function flaseColorChange(){
  if(bFalse === true){
  bFalse = false;
  return flaseAnswer.style.backgroundColor = redColor;
  }
}


// trueColorChange();
// flaseColorChange();