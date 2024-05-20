// 빈 객체 생성
const person = new Object();

// 프로퍼티 추가
person.name = "lee";
person.sayHello = function(){
  //this = peron
  console.log('Hi! My name is ' + this.name);
}

console.log(person);
person.sayHello();

