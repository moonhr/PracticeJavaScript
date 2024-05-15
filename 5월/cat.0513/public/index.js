const root = document.getElementById('root');

/**
 * html 내부 태그 만드는 반복문
 */
for (let i = 0; i < 6; i++) {
  let div = document.createElement('div');
  let img = document.createElement('img');
  root.appendChild(div);
  div.appendChild(img);
}

let img = document.getElementsByTagName('img')
let div = document.getElementById('root').children

/**
 * 고양이 이미지 불러오는 함수
 */
function catAppend() {
  for (let i = 0; i < img.length; i++) {
    let cat = 3455 + i;
    img[i].src = `../img/IMG_${cat}.PNG`;
    img[i].alt = '';
  }
}


//todo 이거 해결해라

/**
 * 애니메이션 동작 함수
 * DOM=html
 */
// window.onload
document.addEventListener("DOMContentLoaded", () => {

  catAppend();
  
  //카운터 0으로 할당
  let catCounter = 0;

  setInterval(() => {
    // 이전 텍스트를 숨김
    div[catCounter].style.display = 'none';
    // 증가 및 다음 텍스트로 이동, div.length와 같다면 0
    catCounter = (catCounter === div.length - 1) ? 0 : catCounter + 1;
    // 새로운 텍스트를 표시
    div[catCounter].style.display = 'block';
    console.log('cat');


    // 1초 간격으로 반복
  }, 150);
});


