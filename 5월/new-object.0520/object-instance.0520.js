function Circle(radius){
  //인스턴스 초기화
  this.radius = radius;
  this.getDiameter = function(){
    return 2 * this.radius;
  }
}

//인스턴스 생성
//반지름이 5인 객체를 생성
const circle1 = new Circle(5);