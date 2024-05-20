function Circle(radius){
  //인스턴스 초기화
  this.radius = radius;
  this.getDiameter = function(){
    return 2 * this.radius;
  };
  //명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this를 반환함
  return 100;
}

//인스턴스 생성
//Circle생성자 함수는 명시적으로 반환한 객체를 반환함
const circle = new Circle(5);
console.log(circle);