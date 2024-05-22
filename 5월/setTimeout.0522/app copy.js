//스탑워치(하고싶은것, 기다리야하는 시간);

//setTimeout(callback, delayTime);
setTimeout (function(){
  console.log('고양이가 날아다닙니다.');
}, 1000);

setTimeout (function(){
  console.log('강아지가 날아다닙니다.');
}, 1000);

setTimeout (function(){
  console.log('너구리가 날아다닙니다.');
}, 1000);


//메모리에 잡혀만 있는 상태
let fromData = {
  a : "1. 꽁꽁 얼어붙은",
  b : "2. 대전천 위로",
  c : "3. 고양이가 날아다닙니다."
}

function a(){
  console.log(fromData.a);
}

function b(){
  console.log(fromData.b);
}

function c(){
  console.log(fromData.c);
}

c();
a();
b();
