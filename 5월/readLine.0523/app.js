const rl = require('readline');
const fs = require('fs');
const pokemonData = JSON.parse(fs.readFileSync("./pokemon.json"));



const readLine = rl.createInterface({
  input : process.stdin,
  output : process.stdout
});


  let answerData = [];
  let score = 0;


function game(){
readLine.question("포켓몬스터 이름 작성해주세요 :", function(answer){

  // todo : 1. 답변을 받는다.
  // todo : 2. 답변과 기초데이터와의 존재 유무를 판단한다.
  // todo : 3. 존재한다면 위 지역변수 배열에 추가한다.(append)
  // todo : 4. 존재한다면, score를 1점 추가한다.
  // todo : 5. 존재하지 않는다면, 다시한번 물어본다.
  // todo : 6. "종료" 라고 말한다면, 질문을 종료하고 결과를 보여준다.
  // todo : 7. 결과는 총 "포켓몬스터 score 개"를 작성하였습니다. 라는 로그를 남겨준다. 
    function ball(){
      pokemonData.forEach(element => {
        if(answer === element){
          answerData.push(answer);
          score++
          console.log("포켓몬 잡기 성공");
          console.log(score+"점 획득!");
          console.log(answerData);
        } else {
          console.log("도전은 여기까지")
          console.log('현재 스코어는'+ score);
          console.log(answerData)
          readLine.close();
        }
      });
    }
    ball();

    if(score === 0){
      console.log("그런 포켓몬은 없다. 더 공부하고와라")
      readLine.close();
    } else {
      readLine.question("다음 포켓몬을 잡겠나? 답은 예/아니오 : ", function(answer2){
        if(answer2 === '예'){
          game();
        } else {
          console.log('현재 스코어는'+ score);
          console.log(answerData)
          readLine.close();
        }
      })
    }
  });
};
game();
