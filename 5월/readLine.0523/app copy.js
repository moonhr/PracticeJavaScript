const rl = require('readline');

let inOut = {
  input: global.process.stdin,
  output: global.process.stdout,
}

const readline = rl.createInterface(inOut);

// readline.question("너의 이름은? : ", function(answer){
//   console.log("네가 쓴 대답은 : ", answer);
//   readline.close();
// });


//* 재귀로 답정너 질문하기
// function a (){
// readline.question("좋아하는 동물은? : ", function (answer){
  
//   if(answer === '고양이'){
//     console.log("정답입니다");
//     readline.question("어떤 고양이 입니까? : ", function(answer2){

//       console.log("당신의 대답은? : ", answer2);
//       readline.close();
//     })
//   } else {
//   console.log("땡! 틀렸습니다.");
//   a();
//   }
// });
// }
// a();

//* html 만드는 질문
readline.question("만들고 싶은 html", function(answer){
  let data = answer;
  const fs = require('fs');
  fs.writeFileSync(data+".html", "hello", function(error){
    if(error === ture){
      console.log("파일생성 실패");
    } else {
      console.log("파일생성 성공");
    } 
  })
  readline.close();
})