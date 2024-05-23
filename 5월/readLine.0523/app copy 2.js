const rl = require('readline');
const fs = require('fs');

const pokemonData = JSON.parse(fs.readFileSync('./pokemon.json'));

let inOut = {
  input: global.process.stdin,
  output: global.process.stdout,
}

const readLine = rl.createInterface(inOut);

readLine.question("포켓몬스터 이름을 작성해주세요.", function(answer){
  for(let i = 0; i < pokemonData.length; i++){
    // console.log((i + 1) + '번째');
    if(answer === pokemonData[i]){
      console.log((i + 1) + '번째' + '존재하는 포켓몬 입니다');
      readLine.close();
      break;
    } else {
      // console.log('존재하지 않는 포켓몬 입니다');
      readLine.close();
    }
  }
})