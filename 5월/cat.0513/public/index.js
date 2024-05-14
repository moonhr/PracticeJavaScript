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
  setInterval((cats) => {

  }, 500);
}




catAppend();
//animation();