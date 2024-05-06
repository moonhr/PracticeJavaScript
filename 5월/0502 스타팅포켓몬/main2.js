const root = document.getElementById('root');
const first = document.getElementById('first');
const last = document.getElementById('last');
const poketballs = document.querySelectorAll('#poketballs img[data-poketmon]');

last.children[0].style.display = 'none';
last.children[1].style.display = 'none';
last.children[2].style.display = 'none';


// display속성 변경 함수
function appendPoketmon(target){
  // 포켓몬들을 변수에 할당
  var poketmons = document.getElementById("last").children;
  // 포켓몬의 길이만큼 반복
  for (var i = 0; i < poketmons.length; i++) {
    // 포켓몬을 하나씩 가져옴
    var div = poketmons[i];
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

//포켓볼의 길이만큼 반복
for (var i = 0; i < poketballs.length; i++) {
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

