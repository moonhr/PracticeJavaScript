const root = document.getElementById('root');


function catAppend(cats){

  cats = [];
  
  for(let i = 0; i<6; i++){
    let div = document.createElement('div');
    root.appendChild(div);
    // console.dir(div);

    //* 이거 맞나...
    for(let cat = 3455; cat < 3461; cat++){
    div.innerHTML = `<img src="../img/IMG_${cat}.PNG" alt="">`
    cats.push(div);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let catCounter = 0;

  setInterval(() => {
  // 이전 텍스트를 숨김
    h1[catCounter].style.display = 'none'; 
    // 증가 및 다음 텍스트로 이동, h1.length와 같다면 0
    catCounter = (catCounter === h1.length - 1) ? 0 : catCounter + 1; 
    // 새로운 텍스트를 표시
    h1[catCounter].style.display = 'inline'; 
    // 1초 간격으로 반복
  }, 1000); 
});




catAppend();
//animation();