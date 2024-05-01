// var someData = [];
// var someIndex = 0;

// for (var i = 0; i < someArray.length; i += 2){
//   if(i + 1 < someArray.length){
//     someData[someIndex] = [someArray[i], someArray[i + 1]];
//   } else {
//     someData[someIndex] = [someArray[i]];
//   }
//   someIndex++;
// }

// console.log(someData);

var timeQ = prompt("서윤이는 오늘 몇시에 일어났나요?", "시간 숫자만 적어주세요. 예) 7");
alert(timeQ);


let timeA = Number(timeQ);

if(timeA <= 7) {
  alert('일찍일어났네요! 칭찬스티커~');
} else if(timeA >= 9) {
  alert("늦었네요~ 다음엔 더 일찍 일어나세요~");
} else {
  alert("그냥 그렇네요~");
}



// if (timeQ.toLowerCase() <= 7)
//   alert("일찍일어났네요! 칭찬스티커~");

//   else if (7 < timeQ.toLowerCase() <= 8)
//   alert("그냥 그렇네요~");

//   else (timeQ.toLowerCase() > 8)
//   alert("늦었네요~ 다음엔 더 일찍 일어나세요~");