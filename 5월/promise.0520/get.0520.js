// * get 요청을 위한 비동기 함수
// * 함수 내부의 onload가 비동기로 동작하기 때문에 비동기함수
const get = url => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = () => {
    if(xhr.status === 200) {

      // * 서버의 응답을 콘솔에 출력
      // console.log(JSON.parse(xhr.response));
      // * 서버의 응답을 반환
      return JSON.parse(xhr.response); 
    }
      console.error(`${xhr.status} ${xhr.statusText}`);
  };
};
// * id가 1인 post를 취득
// get('http://jsonplaceholder.typicode.com/posts/1');
const response = get('https://jsonplaceholder.typicode.com/posts/1');
console.log(response);