// const root = document.getElementById('root');

// // 태그 제작
// const div = document.createElement('div');
// const h1 = document.createElement('h1');
// const img = document.createElement('img');


// //구조 제작
// root.append(document.createElement('div'), h1, div, document.createElement('div'));
// root.children[0].append(document.createElement('img'));
// root.children[2].append(document.createElement('div'));
// root.children[2].children[0].append(document.createElement('img'));
// root.children[2].children[0].append(document.createElement('img'));
// root.children[2].children[0].append(document.createElement('img'));
// root.children[3].append(document.createElement('div'), document.createElement('div'), document.createElement('div'));
// root.children[3].id = 'choice';
// root.children[3].children[0].id = 'digimon'
// root.children[3].children[1].id = 'meowth'
// root.children[3].children[2].id = 'docOh'

// //컨텐츠
// //* 오박사 시작
// root.children[0].children[0].src = './img/오박사시작.png';
// //* 오박사 멘트
// root.children[1].textContent = '너만의 포켓몬을 골라보렴!';
// //* 포켓볼 이미지 3개
//   for(i=0; i<root.children[2].children[0].children.length; i++){
//     root.children[2].children[0].children[i].src = './img/포켓볼.png'
// }

// //결과html

// choice.style.display = 'none';

// for(i=0; i<3; i++){
// choice.children[i].append(document.createElement('img'), document.createElement('h1'));
// }
// digimon.children[0].src = './img/아구몬.png'
// digimon.children[1].textContent = '아구몬을 골랐구나 세상을 구해보렴'

// meowth.children[0].src = './img/냐옹이.png'
// meowth.children[1].textContent = '냐옹이를 골랐구나 세상을 정복해보렴'

// docOh.children[0].src = './img/오박사.png'
// docOh.children[1].textContent = '오박사를 골랐구나 대학원에 온걸 환영한다'


// function open(){
//   if(docOh.style.display == 'none'){
// }
// }


// //결과페이지 이동
// function move(){
//   let docOh = root.children[0].children[0];
//   let ment = root.children[1];
//   let poketballs = root.children[2].children[0];
//   docOh.style.display = 'none';
//   ment.style.display = 'none';
//   poketballs.style.display = 'none';
  
//   //나타나게하기
// }


// for (let i = 0; i < root.children[2].children[0].children.length; i++) {
// root.children[2].children[0].children[i].addEventListener('click', move);
// }
// console.log(root.children[2].children[0].children[0]);
