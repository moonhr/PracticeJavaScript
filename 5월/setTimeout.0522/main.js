//case1
// const circle1 = document.getElementById('circle1');
// const circle2 = document.getElementById('circle2');
// const circle3 = document.getElementById('circle3');
// const click = document.getElementById('click');

// circle1.style.position = "absolute";
// circle1.style.left = "-1453px";
// circle1.style.top = "-844px";

// let circle1x = circle1.style.left.length;
// let circle1y = circle1.style.top.length;
// console.log(circle1.style);
// console.log(circle1y);

// let timer = 0;

// let circle1Move = setInterval(() => {
//   console.log('움직임');

//   timer++

//   // console.log(circle1x);
//   if(timer == 100){
//     clearInterval(circle1Move);
    
//   }
// }, 1000)


//! case2

const click = document.getElementById('click.one');
click.addEventListener('click',()=>{

function circle1Process(){
  const circle1 = document.getElementById('circle1');
  let left = -1453;
  let top = -844;
  //circle1 left, top값 설정
  circle1.style.left = Number(circle1.style.left.replace('px', '')) + left + 'px';
  circle1.style.top = Number(circle1.style.top.replace('px', '')) + top + 'px';

  console.log(circle1.style.left);
  console.log(circle1.style.top);


  let circle1Move = setInterval(() => {
    console.log('작동')

  left += 10
  top += 10

  circle1.style.left = `${left}px`;
  circle1.style.top = `${top}px`;

  console.log(circle1.style.left);
  console.log(circle1.style.top);

    if(left > -800 || top > 900){

    clearInterval(circle1Move);
    }

    }, 10)

}




function circle2Process(){
  const circle2 = document.getElementById('circle2');
  let left = 1493;
  let top = -798;
  //circle2 left, top값 설정
  circle2.style.left = Number(circle2.style.left.replace('px', '')) + left + 'px';
  circle2.style.top = Number(circle2.style.top.replace('px', '')) + top + 'px';

  console.log(circle2.style.left);
  console.log(circle2.style.top);

  let circle2Move = setInterval(() => {
    console.log('작동')

  left -= 10
  top += 10

  circle2.style.left = `${left}px`;
  circle2.style.top = `${top}px`;

  console.log(circle2.style.left);
  console.log(circle2.style.top);

    if(left < -100 || top > 0){

    clearInterval(circle2Move);
    }

    }, 10)

}


function circle3Process(){
  const circle3 = document.getElementById('circle3');
  let left = 552;
  let top = 1079;
  //circle2 left, top값 설정
  circle3.style.left = Number(circle3.style.left.replace('px', '')) + left + 'px';
  circle3.style.top = Number(circle3.style.top.replace('px', '')) + top + 'px';

  let circle3Move = setInterval(() => {
    console.log('작동')

  left -= 10
  top -= 10

  circle3.style.left = `${left}px`;
  circle3.style.top = `${top}px`;

    if(left < 0 && top < 331){

    clearInterval(circle3Move);
    }

    }, 10)

}

circle1Process();
circle2Process();
circle3Process();

});

