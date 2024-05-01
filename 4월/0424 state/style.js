let root = document.getElementById('root');

console.dir(root);


//바디스타일
root.style.height = '100vh';
root.style.display = 'flex';
root.style.flexDirection = 'column';
root.style.alignItems = 'center';
root.style.justifyContent = 'space-evenly';


//자식 공통 스타일
for(i=0; i<root.children.length; i++){
  root.children[i].style.textAlign = 'center';
  root.children[i].style.fontFamily = 'noto sans kr';
  root.children[i].style.margin = '0px';
  root.children[i].style.padding = '0px';
}

//h1
root.children[0].style.fontSize = '40px';


//h4
root.children[1].style.fontSize = '32px';
root.children[1].style.color = '#515151';

//button
for(x=2; x<4; x++){
  root.children[x].style.width = '253px';
  root.children[x].style.height = '60px';
  root.children[x].style.fontSize = '32px';
  root.children[x].style.background = 'white';
  root.children[x].style.boxShadow = '1px 1px 5px 0px black'
  root.children[x].style.border = 'block','solid','3px'
}

console.dir(root.children[4]);


//다음문제
root.children[4].style.textDecoration = "none";
root.children[4].style.color = 'black';
root.children[4].style.fontSize = '32px'