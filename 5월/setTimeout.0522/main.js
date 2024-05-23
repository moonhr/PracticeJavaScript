
//! case2

const click = document.getElementById('click.one');
const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');


//* 작동전 위치값에 대한 함수
function beforePxControl(circle, left, top) {
  circle.style.left = Number(circle1.style.left.replace('px', '')) + left + 'px';
  circle.style.top = Number(circle1.style.top.replace('px', '')) + top + 'px';
}

//* 작동이후 위치값에 대한 함수
function afterPxControl(circle, left, top) {
  circle.style.left = `${left}px`;
  circle.style.top = `${top}px`;
}


click.addEventListener('click', () => {

  function circle1Process() {
    moveLeft = -1453;
    moveTop = -844;

    //circle1 left, top값 설정
    beforePxControl(circle1, moveLeft, moveTop);

    //* 위치 이동 비동기 함수
    let circle1Move = setInterval(() => {
      moveLeft += 10
      moveTop += 10

      afterPxControl(circle1, moveLeft, moveTop);

      if (moveLeft > -800 || moveTop > 900) {
        clearInterval(circle1Move);
      }
    }, 10)
  }




  function circle2Process() {
    let moveLeft = 1493;
    let moveTop = -798;

    //circle2 left, top값 설정
    beforePxControl(circle2, moveLeft, moveTop);


    let circle2Move = setInterval(() => {


      moveLeft -= 10
      moveTop += 10

      afterPxControl(circle2, moveLeft, moveTop);

      if (moveLeft < -100 || moveTop > 0) {

        clearInterval(circle2Move);
      }

    }, 10)

  }


  function circle3Process() {
    let moveLeft = 552;
    let moveTop = 1079;

    //circle2 left, top값 설정
    beforePxControl(circle3, moveLeft, moveTop);


    let circle3Move = setInterval(() => {

      moveLeft -= 10
      moveTop -= 10

      afterPxControl(circle3, moveLeft, moveTop);

      if (moveLeft < 0 && moveTop < 331) {

        clearInterval(circle3Move);
      }

    }, 10)

  }

  circle1Process();
  circle2Process();
  circle3Process();

});

