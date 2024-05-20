function objectLoop(array, object){
  for(let key in object){
    array.push(object[key]);
  }
}

// * cjs 방식 모듈 내보내기
module.exports = objectLoop;