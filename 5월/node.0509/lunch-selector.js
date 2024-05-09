// 내일 점심메뉴 배열 만들기
const lunchMenus = [
  ['와퍼','주니어와퍼','몬스터와퍼','스테커버거','콰트로치즈버거'],
  '순두부찌개',
  ['쉑쉑버거','밀크쉐이크','핫도그','딸기쉐이크'],
  '감자탕',
  '쭈구미',
  '도군함박',
  '도군샤브',
  '마라탕',
  '곰탕',
  '쌀국수',
  '돈까스',
  '칼국수',
  '콩나물밥',
  ['치킨마요','참치마요','도련님도시락'],
  ['짜장면','짬뽕','볶음밥','잡채밥','탕수육','유린기']
]

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

/*
function lunchSelector(array){
  랜덤을 결정하면 -> 그것이 하나의 인덱스가 되서 -> 배열속 원소값을 선택해주는 실행문

  if(Array.isArray(array) === true)

  if(배열 원소가 배열이라는 것만 알아낸다면){
    배열원소 속 배열을 결정해주어야 함
  }
  return 'something';
}
*/


function lunchSelector(array){
  const ramdomMenu = getRandomInt(0, array.length);
  array.forEach.() => {}
  lunchMenus.forEach(array => {
    getRandomInt(0, array.length)

  if(array.isArray(array) === true){
    console.log(array);
  }
  });
}

//강사님 코드
function lunchSelector(array) {
  const firstGetRandomIndex = getRandomInt(0, array.length);
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[firstGetRandomIndex])) {
      const randomIndex = getRandomInt(0, array[i].length);
      for (let j = 0; j < array[i].length; j++) {
        return array[firstGetRandomIndex][randomIndex];
      }
      return array[randomIndex];
    }
  }
  return array[firstGetRandomIndex];
}
console.log(lunchSelector(lunchMenus));