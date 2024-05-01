//! 아스타리스크 해결법
var styles = 
  `* {
    margin : 0;
    padding : 0;
    box-sizing : border-box;
    overflow-x : hidden;
  }`

let style = document.createElement('style');
// style.innerHTML = styles.key;
// document.head.appendChild(style);
style.innerHTML = styles;


document.head.appendChild(style);



let root = document.getElementById('root');

//TODO 이부분 나중에 더 뜯어보기
for (let nIdx = 0; nIdx < names.length; nIdx++) {
  let name = names[nIdx]; // == for(let name of names)
  let element = document.createElement("div");
  element.textContent = name;
  root.appendChild(element);
}

console.dir(root);

//! Root Container
root.style.margin = '2vw, auto';
root.style.boxSizing = 'border-box';
root.style.overflowX = 'hidden';
root.style.width = '100vw';
root.style.minHeight = '100vh';
root.style.height = 'auto';
root.style.gap = '1vw';


//! boxColor
function boxColor(bc){
  for(i=0; i<root.children.length; i++){
  root.children[i].style.backgroundColor = bc;
  }
}
boxColor('#f0f0f0');

console.dir(root.children[0].style);


//! boxpadding
function boxPadding(bp){
  for(i=0; i<root.children.length; i++){
    root.children[i].style.padding = bp;
  }
}
boxPadding('1vw');

//! display
root.style.display = 'grid';
root.style.gridAutoRows = 'minmax(150px, auto)';

//? 해당 코드 닫음
// ! gridTemplateRows
// function gridTemplateRows(num){
//   root.style.gridTemplateRows = num;
// }
// gridTemplateRows('repeat(4, 1fr');

// function gridColumn(a, b, c){
//   if(root.style.width > '900px'){
//     root.style.gridTemplateColumns = a;
//   } else if (root.style.width < '600px') {
//     root.style.gridTemplateColumns = b;
//   } else {
//     root.style.gridTemplateColumns = c
//   }
// }
// gridColumn('repeat(5, 1fr', 'repeat(3, 1fr)', 'repeat(1, 1fr');

//TODO js matchMedia 함수 연구하기
//? 이 코드는 화면 별 새로고침 할 때에만 분할이 바뀜
// function gridTemplateColumns(a,b,c){
//   if (window.matchMedia("(min-width:900px)").matches){
//     root.style.gridTemplateColumns = 'repeat(5, 1fr';
//   } else if (window.matchMedia("(max-width:600px)").matches){
//     root.style.gridTemplateColumns = 'repeat(1, 1fr)';
//   } else {
//     root.style.gridTemplateColumns = 'repeat(3, 1fr)';
//   }

// gridTemplateColumns('repeat(5, 1fr', 'repeat(1, 1fr)', 'repeat(3, 1fr)';

//* 재시도
//! gridTemplateColumns
function gridTemplateColumns(a,b,c){
  let min900 = window.matchMedia("screen and (min-width:900px)");
  let max600 = window.matchMedia("screen and (max-width:600px)");
  let max900min601 = window.matchMedia("screen and (min-width: 601px) and (max-width: 900px)");

  //Todo 콜백함수 문법 연구
  //! onchange 함수 문법
  min900.onchange = (e)=>{
  if(e.matches){
    root.style.gridTemplateColumns = a;
    root.style.gridAutoRows = 'minmax(150px, auto)';
  }
}
  max600.onchange = (e)=>{
  if(e.matches){
    root.style.gridTemplateColumns = b;
    root.style.gridAutoRows = '120px';
  }
}
  max900min601.onchange = (e)=>{
  if(e.matches){
    root.style.gridTemplateColumns = c;
    root.style.gridAutoRows = 'minmax(150px, auto)';
  }
}
}
gridTemplateColumns('repeat(5, 1fr', 'repeat(1, 1fr)', 'repeat(3, 1fr');


//! display
function display(a,b,c){
  for(i=0; i<root.children.length; i++){
    root.children[i].style.display = a;
    root.children[i].style.alignItems = b;
    root.children[i].style.justifyContent = c;
  }
}
display('flex', 'center', 'center');

//! border
function border(a, b, c){
  for(i=0; i<root.children.length; i++){
    root.children[i].style.border = a;
    root.children[i].style.borderStyle = b;
    root.children[i].style.borderColor = c;
  }
}
border('1px', 'solid', '#ccc');

//! fontSize
function fontSize(num){
  for(i=0; i<root.children.length; i++){
    root.children[i].style.fontSize = num;
  }
}
fontSize('1rem');