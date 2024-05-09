const studentNamesArray = require('./names-data').studentNamesArray;

//for문으로 콜백함수를 확인
studentNamesArray.forEach((name) => {
  console.log(name);
});


const studentNamesArray = require('./names-data.js');
// # javascript 방식 - 선언형
studentNamesArray.forEach((name) => {
  console.log(name);
});
// # 일반 반복문 방식 - 절차형
for(let i = 0; i < studentNamesArray.length; i++) {
  console.log(studentNamesArray[i]);
}