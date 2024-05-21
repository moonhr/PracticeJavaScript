const htmlMarkup = {
  head : "헤드",
  body : "바디"
}

function test(object) {
  let result = [];
  for(let key in object) {
    // result.push(key);
    //* 개발자들이 만든 또라이같은 방법 => innerHTML로 넣어버릴 수 있음
    result.push(`<${key}> ${object[key]} </${key}>`);
  }
  console.log(result);
  //* result를 앞뒤로 붙여달라는 메서드, " "로 공간을 비우면 ,가 나오지 않음.
  return result.join(" ");
}

test(htmlMarkup);
console.log(test(htmlMarkup));