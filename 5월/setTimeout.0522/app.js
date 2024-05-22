//자스 스타일 정석(콜백함수 익명)

//* 변수 선언문으로 작성

let counter = 0;
const timer = function(){ 

  setTimeout(() => {
  console.log(counter + "vw");
  counter++;

  if(counter < 10){
    //* 내가 나를 호출함 = 재귀
    timer();
  } else {
    console.log("종료");
  }
  
}, 15); 
};

timer();

//////////////////////////////////////

/**
 * * 2024. 05. 22 문혜림
 * * 종료방법이 없어서 핸들러를 밖에서 설정해줘야 함
 * * 많이 쓰여지는 패턴
 * * 반복적인 행동을 지원한다면 100퍼센트 setInterval
 */

// ? 문법 : setInterval("반복실행", 실행간격);

let intervalHandler = 0;

let time = setInterval(() => {

  console.log(intervalHandler + '초');
  intervalHandler++;
  
  if(intervalHandler > 10){
    clearInterval(time);
  }
}, 1000);



class a {
  constructor(number){
    this.number = number
  }
  b(){
    
  }
  c(){

  }

}