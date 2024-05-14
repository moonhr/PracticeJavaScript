const menu = document.getElementById('menu');
const main = document.getElementById('main');


document.addEventListener('DOMContentLoaded',
  function changeMain(){
    if(location.pathname === '/vietnam.html'){
      main.innerHTML = `<img src="../img/vietnam.PNG" alt="">`
      main.children[0].style.width ='100%';
      main.children[0].style.height ='100%';
    }

    if(location.pathname === '/taiwan.html'){
      main.innerHTML = `<img src="../img/taiwan.PNG" alt="">`
      main.children[0].style.width ='100%';
      main.children[0].style.height ='100%';
    }

    if(location.pathname === '/japan.html'){
      main.innerHTML = `<img src="../img/japan.PNG" alt="">`
      main.children[0].style.width ='100%';
      main.children[0].style.height ='100%';
    }

    if(location.pathname === '/korea.html'){
      main.innerHTML = `<img src="../img/korea.PNG" alt="">`
      main.children[0].style.width ='100%';
      main.children[0].style.height ='100%';
    }

    if(location.pathname === '/index.html'){
      main.innerHTML = `<img src="../img/index.PNG" alt="">`
      main.children[0].style.width ='100%';
      main.children[0].style.height ='100%';
    }
  }
)

