function exampleCallback(a,b){
  return a + b;
}

function one(a, b, callback){
  return callback(a, b);
}

let testOne = one(1, 2, exampleCallback);
console.log(testOne); //3

function two(a, b, callback){
  return callback(a, b);
}

//호출할때 함수를 작성해주는 경우 -> 일반적인 콜백함수 방식
let testTwo = two(2, 3, function(a, b){
  return a - b;
});
console.log(testTwo); //-1

function anotherFunc(a, b){
  return a + b;
}

//함수 three는 매게변수만 받아서 다른 함수에게 넘겨주는 역할만 함
function three(a, b){
  return anotherFunc(a, b);
}

let testThree = three(3, 4);
console.log(testThree); //7