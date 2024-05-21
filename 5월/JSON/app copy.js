const fs = require('fs');
//* 모듈 가져오기
const todayDate = require('./todayDate.js');

console.log(todayDate());

//* 문법은 노드를 확인해가면서 작성
//* Sync사용시 의문에 에러가 나지 않음

//* txt파일은 요소간의 맵핑이 어려워서 JSON이 나옴

const test = fs.writeFileSync( todayDate() + "-test.txt", "hello", "utf-8", function(error){
  //* 에러 발생시 에러처리
  if(error) {
    console.log("파일만드는 것 에러");
    console.log("에러내용 : ", error);
  }
  console.log("저장완료");
});



