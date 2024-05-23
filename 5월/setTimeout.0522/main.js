
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
//* 각 포지션 리터럴값
let positionSet = {
  circle1Set : {
    moveLeft : -1453,
    moveTop : -844
  },
  circle2Set : {
    moveLeft : 1500,
    moveTop : -800
  },
  circle3Set : {
    moveLeft : 550,
    moveTop : 1080
  }
}
//* 값 축약
let set1Left = positionSet.circle1Set.moveLeft
let set1Top = positionSet.circle1Set.moveTop
let set2Left = positionSet.circle2Set.moveLeft
let set2Top = positionSet.circle2Set.moveTop
let set3Left = positionSet.circle3Set.moveLeft
let set3Top = positionSet.circle3Set.moveTop


click.addEventListener('click', () => {

  function circle1Process() {
    beforePxControl(circle1, set1Left, set1Top);
    //* 위치 이동 비동기 함수
    let circle1Move = setInterval(() => {
      set1Left += 10
      set1Top += 10
      afterPxControl(circle1, set1Left, set1Top);
      if (set1Left > -800 || set1Top > 900) {
        clearInterval(circle1Move);
      }
    }, 10)
  }

  function circle2Process() {
    //circle2 left, top값 설정
    beforePxControl(circle2, set2Left, set2Top);
    let circle2Move = setInterval(() => {
      set2Left -= 10
      set2Top += 10
      afterPxControl(circle2, set2Left, set2Top);
      if (set2Left < -100 || set2Top > 0) {
        clearInterval(circle2Move);
      }
    }, 10)
  }

  function circle3Process() {
    //circle2 left, top값 설정
    beforePxControl(circle3, set3Left, set3Top);
    let circle3Move = setInterval(() => {
      set3Left -= 10
      set3Top -= 10
      afterPxControl(circle3, set3Left, set3Top);
      if (set3Left < 0 && set3Top < 331) {
        clearInterval(circle3Move);
      }
    }, 10)
  }

  circle1Process();
  circle2Process();
  circle3Process();

});

