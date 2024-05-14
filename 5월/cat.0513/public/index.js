const root = document.getElementById('root');


function catAppend() {

  for (let i = 0; i < 6; i++) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    root.appendChild(div);
    div.appendChild(img);
    // console.dir(div);
  }
    //* 이거 맞나...
    // let div = document.getElementById('root').children
    // for (let cat = 3455; cat < 3461; cat++) {
    //   let img = document.getElementsByTagName('img')
    //   for (let i = 0; i < img.length; i++) {
    //     img[i].src = `../img/IMG_${cat}.PNG`;
    //     img[i].alt = '';
    //   }
    //   // div.innerHTML = `<img src="../img/IMG_${cat}.PNG" alt="">`
    // }

    let img = document.getElementsByTagName('img')
    for (let i = 0; i < img.length; i++) {
      let cat = 3455 + i;
      img[i].src = `../img/IMG_${cat}.PNG`;
      img[i].alt = '';
    }

  // root.children.style.display = 'none';

  }



const div = document.getElementById('root').children
//todo 이거 해결해라
// div.style.display = 'none';

catAppend();



document.addEventListener("DOMContentLoaded", () => {
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




// catAppend();
//animation();