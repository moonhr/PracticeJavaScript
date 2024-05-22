//* 비동기함수를 동기화
//* 순서를 어기는 것을 순서를 지키게 하는 방법 = 콜백함수
setTimeout(function(){
  console.log("1 너구리가 공중부양");

  setTimeout(function(){
    console.log("2 공욱재가 늦잠");
  }, 1000)

}, 1000)

////////////////////////////////////////////////////
//* a함수로 랩핑한다면
setTimeout(function() {
  console.log("1. 너구리가 공중부양");

  a();

}, 1000)

function a() {
  setTimeout(function() {
    console.log("2. 공욱재가 늦잠");
  }, 1000)

}