function forObject(a, b){
  //중첩 if문 a가 통과되지 않으면 b도 검사하지 않음 => 콜백패턴
  if(typeof(a) === "object"){
    if(typeof(b) === "object"){
      console.log("a, b 매개변수 모두 객체입니다.");
    } else {
      console.error("객체아님");
    }
  } else {
    console.log("객체아님");
  }
}

/**
 * * 2024.05.20
 * * 위처럼 쓰기 싫어서 만든 문법
 * * try만 보면 된다 = "원하는게 아니면 다 에러처리해줘"
 * * 보통 (error)는 자동으로 만들어짐. 콘솔에 찍으면 에러확인 가능
 * * 코드가 길어질 땐 예외처리를 고려한다
 */

function forObject(a, b){
  try {
    if(typeof(a) === "object"){
      if(typeof(b) === "object"){
        console.log("a, b 매개변수 모두 객체입니다.");
      }
    }
  } catch(error) {
    console.log(error)
    console.log("객체아님");
  }
}

//객체 초기화
const a = {first : 1};
//이렇게도 초기화 선언 가능함 like 자바
const b = {first : 2};

forObject(a,b);