function a(a,b){
  return a+b;
}

function b(a, b, callback){
  callback(a, b);
}
//인자를 전달한다. 콜백에 아규먼츠를 전달한다

function add(a, b){
  return a+b;
}

console.log(b(1, 2, function(a,b) {
  if(typeof(a) === 'string' && typeof(b)){
    console.log(a+b);
  } else if(typeof(a) === 'string' || typeof(b)){
    console.log(a*b);
  }
}));
//호출할 때 함수를 정의한다 => 재활용성 없음
//a와 b가 둘다 문자열이면 덧셈 아니면 곱셈