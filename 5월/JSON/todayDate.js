//* 모듈화 만들기
function todayDate(){
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return year + "-" + month + "-" + day
  
}
console.log(todayDate());

module.exports = todayDate;