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


// * 모듈화된 부분 가져오기
const objectLoop = require('./module.objectLoop');
const someData = require('./someData');


function forObject(a, b){
  try {
    if(typeof(a) === "object"){
      if(typeof(b) === "object"){

        // * key가 리터럴값이기 때문에 전제조건이 까다롭다. 모를경우가 더 많기 때문.

        let values = [];

        objectLoop(values, a);
        objectLoop(values, b);

        console.log(values);

        // let add = values[0] + values[1];

        // * 위의 식보다 아아아주 자스스러운 문법
        let add = values.reduce((a,b) =>{
          return a + b;
        })

        console.log("다 더한 값 : ", add);
      }
    }
  } catch(error) {
    console.log(error)
    console.log("객체아님");
  }
}

//객체 초기화


forObject(someData.a, someData.b);