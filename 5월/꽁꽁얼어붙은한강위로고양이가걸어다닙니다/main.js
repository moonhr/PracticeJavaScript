var canvas = document.getElementById("canvas");
//* getContext()메서드는 드로잉 컨텍스트에 액세스 할 수 있다.
var ctx = canvas.getContext("2d");


canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

//* 요소를 객체로 정리하기
var cat = {
  x: 10,
  y: 200, //등장 좌표
  width: 50,
  height: 50, //크기
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

var timer = 0;
var cactuses = [];

function executePerFrame() {
  requestAnimationFrame(executePerFrame);
  
  timer++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  if (timer % 120 === 0) {
    var cactus = new Cactus();
    cactuses.push(cactus);
  }
  
  cactuses.forEach((a) => {
    a.x--;
    a.draw();
  });

  dino.draw();
}
executePerFrame();

if (timer % 240 === 0) {
  var cactus = new Cactus();
  cactuses.push(cactus);
}

cactuses.forEach((a, i, o) => {
  if (a.x < 0) {
    o.splice(i, 1);
  }
  a.x -= 2;
  a.draw();
});

if (jump == true) {
    dino.y -= 2; 
    jumpTimer++; 
  }
  if (jump == false) {
    if (dino.y < 300) {
      dino.y += 2;
    }
  }
  if (jumpTimer > 40) {
    jump = false;
    jumpTimer = 0;
  }
  dino.draw();

executePerFrame();

var jump = false;

document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    jump = true;
  }
});

function isBumped(dino, cactus) {
  var xDif = cactus.x - (dino.x + dino.width);
  var yDif = cactus.y - (dino.y + dino.height);
  if (xDif < 0 && yDif < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
  }
}

var img1 = new Image();
img1.src = "./img./IMG_3458.png";

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 325;
    this.width = 25;
    this.height = 25;
  }
  draw() {
    // ctx.fillStyle = "red";
    // ctx.fillRect(this.x, this.y, this.width, this.height); //네모는 일명 hitbox
    ctx.drawImage(img1, this.x, this.y, this.width, this.height);
  }
}