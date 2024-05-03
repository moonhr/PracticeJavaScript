const root = document.getElementById('root');

// 태그 제작
const div = document.createElement('div');
const h1 = document.createElement('h1');
const img = document.createElement('img');


//구조 제작
root.append(document.createElement('div'), h1, div);
root.children[0].append(document.createElement('img'));
root.children[2].append(document.createElement('img'));
root.children[2].append(document.createElement('img'));
root.children[2].append(document.createElement('img'));

//컨텐츠
img.src = './img/오박사 시작.png';
firstdiv = root.children[0];
firstdiv.appendChild(img);
