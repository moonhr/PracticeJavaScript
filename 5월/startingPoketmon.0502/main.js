
const root = document.getElementById('root');
const first = document.getElementById('first');
const last = document.getElementById('last');
const poketballs = document.querySelectorAll('#poketballs img[data-poketmon]');

//* 후에 나타날 요소 display none
for(let i=0; i<last.children.length; i++){
  last.children[i].style.display = 'none';
}


/**
 * * display속성 변경 함수
 * @param {*} target : data속성 일치 확인
 */
function appendPoketmon(target){
  // 포켓몬들을 변수에 할당
  let poketmons = document.getElementById("last").children;
  // 포켓몬의 길이만큼 반복
  for (var i = 0; i < poketmons.length; i++) {
    // 포켓몬을 하나씩 가져옴
    let div = poketmons[i];
    // 포켓몬의 data-poketmon 속성이 target과 같으면
    if (div.getAttribute('data-poketmon') === target) {
      // 해당 포켓몬을 보여줌
      div.style.display = 'flex';
      div.style.flexDirection = 'column';
      div.style.alignItems = 'center';
    } else {
      // 그렇지 않으면 해당 포켓몬을 숨김
      div.style.display = 'none';
    }
}
}

/**
 * * data속성 일치 시 클릭이벤트 발동
 */
// 포켓볼의 길이만큼 반복
for (let i = 0; i < poketballs.length; i++) {
  //포켓볼을 클릭하면 함수를 실행
  poketballs[i].addEventListener('click', function() {
    //첫번째 화면을 가리고 뒷 화면을 보여줌
    first.style.display = 'none';
    last.style.display = 'flex';
    //변수 타켓에 this(클릭된 이미지 요소)의 data-poketmon 속성을 가져와서 할당
    let target = this.getAttribute('data-poketmon');
    //포켓볼을 클릭했을 때 해당 포켓몬을 보여줌
    appendPoketmon(target);
  });
}

//* 모바일환경 시 이미지 사이즈 변경
if(window.innerWidth < 768){
  first.children[0].children[0].style.height = '20vh';
  for(let num=0; num<first.children[2].children.length; num++){
  first.children[2].children[i].style.height = '15vh';
  }
}