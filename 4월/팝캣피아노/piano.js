// const arr = document.getElementsByTagName("img");


// //* 함수는 정의되는 순간 상위 환경을 기억하기 때문에 !!! 정의되는 순간  
// //* '!' 등호를 바꿈 (true -> false) (false -> true);
// //* 함수, 스코프, 클로져, 렉시컬 
// let clickEvent = function(){
//   let bClick = false;

//   return function(arr){
//     bClick = !bClick;
//     if(bClick == true)
//     {
//       arr.src = "popcat_open.gif";
//     }

//     else
//     {
//       arr.src = "popcat_close.png";
//     }
//   }
// }();





// //* 이벤트 함수 문법
// //* eventTarget.addEventListener('eventType', function)
// //* 이벤트를실행할타겟.addEventListener('이벤트타입', 실행할함수)

// for(let nIdx = 0 ; nIdx < arr.length ; nIdx++)
// {
//   arr[nIdx].addEventListener('click',() => { clickEvent(arr[nIdx]) });    
// }




document.addEventListener('DOMContentLoaded', function() {
  const keys = document.querySelectorAll('[data-key]');
  keys.forEach(key => {
    key.addEventListener('click', playSound);
  });

  window.addEventListener('keydown', function(event) {
    const key = event.key;
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    const img = document.querySelector(`[data-key="${key}"] img`);

    if (audio && img) {
      audio.currentTime = 0; // 음원 재생 위치 초기화
      audio.play(); // 음원 재생

      // 이미지 변경: 고양이 입 열린 이미지로 변경 후 100ms 후에 다시 닫힌 이미지로 변경
      img.src = "./popcat_open.gif";
      setTimeout(() => {2
        img.src = "./popcat_close.png";
      }, 300);
    }
  });

  function playSound(event) {
    const key = event.currentTarget.dataset.key;
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    const img = event.currentTarget.querySelector('img');

    if (audio && img) {
      audio.currentTime = 0; // 음원 재생 위치 초기화
      audio.play(); // 음원 재생

      // 이미지 변경: 고양이 입 열린 이미지로 변경 후 100ms 후에 다시 닫힌 이미지로 변경
      img.src = "./popcat_open.gif";
      setTimeout(() => {
        img.src = "./popcat_close.png";
      }, 300);
    }
  }
});

