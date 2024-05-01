const root = document.getElementById('root');
const on = document.getElementById('on');
const off = document.getElementById('off');

//* root 스타일
root.style.width = '100vw';
root.style.height = '100vh';
root.style.display = 'flex';
root.style.justifyContent = 'center';
root.style.alignItems = 'center';
root.style.backgroundColor = '#ECECEC';


//* on 스타일
on.innerText = 'ON';
on.style.fontSize = '30vw';
on.style.fontWeight = '900';

//* off 스타일
off.innerText = 'OFF';
off.style.fontSize = '30vw';
off.style.fontWeight = '900';
off.style.display = 'none';



document.addEventListener('DOMContentLoaded', () => {

  //* addEventListener 메서드 방식, 등록된 순서대로 호출
  on.addEventListener('click', function onClick(){
    root.style.backgroundColor = '#424242';
    // on.style.display = 'none';
    off.style.display = 'block';
    off.style.color = '#D6D89D';
    off.style.filter.dropShadow = '13px 13px 14px rgba(0, 0, 0, 0.25)';
  });
  off.addEventListener('click', function offClick() {
    root.style.backgroundColor = '#ECECEC';
    on.style.display = 'block';
    // off.style.display = 'none';
    on.style.color = 'black';
  });
  //

});
  //* 이벤트 핸들러 프로퍼티 방식 -> 장점 : html과 js가 뒤섞이지 않아도 된다., 단점 : 하나의 이벤트 핸들러만 바인딩할 수 있다.
//   on.onclick = function onClick(){
//     root.style.backgroundColor = '#424242';
//     on.style.display = 'none';
//     off.style.display = 'block';
//     off.style.color = '#D6D89D';
//     off.style.filter.dropShadow = '13px 13px 14px rgba(0, 0, 0, 0.25)';
//   };
//   off.onclick = function offClick(){
//     root.style.backgroundColor = '#ECECEC';
//     on.style.display = 'block';
//     off.style.display = 'none';
//     on.style.color = 'black';
//   };
// });
//* 이동 애니메이션

// let keyframesOut = [
//   {transform: "translate(0px, 0)"},
//   {transform: "translate(-1000px, 0)"},
// ]
// let keyframesIn = [
//   {transform: "translate(1000px, 0)"},
//   {transform: "translate(0px, 0)"},
// ]

// let options = {
// 	delay: 1300,
//   duration: 1000,
//   easing: "ease-in",
// 	fill: "forwards"
// };

// if(onClick) {
//   on.animate(keyframesOut, options);
//   off.animate(keyframesIn, options);
// };
// if(offClick) {
//   on.animate(keyframesIn, options);
//   off.animate(keyframesOut, options);
// };

// 
