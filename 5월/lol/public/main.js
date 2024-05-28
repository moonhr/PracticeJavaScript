let nameValid = false;
let lineValid = false;
let chamValid = false;

document.getElementById("name").addEventListener('blur',async()=>{
  let name = this.value;
  let nameMenu = document.getElementById('name.menu');
  let response = await fetch('/validate-name', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  });
  let result = await response.json();
  nameValid = result.valid;
  if (nameValid) {
    nameMenu.style.color = "rgba(255,255,255,1)";
  } else {
    nameMenu.style.color = "rgba(255,255,255,0.2)";
  }
  updateSubmitButton();
})

document.getElementById("line").addEventListener('change', () => {
  let lineMenu = document.getElementById('line.menu');
  lineValid = this.value !== '';
  if (lineValid) {
    lineMenu.style.color = "rgba(255,255,255,1)";
  } else {
    lineMenu.style.color = "rgba(255,255,255,0.2)";
  }
  updateSubmitButton();
});

document.getElementById("cham").addEventListener('blur', async () => {
  let cham = this.value;
  let championMenu = document.getElementById('champion.menu');

  let response = await fetch('/validate-cham', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cham })
  });
  let result = await response.json();
  chamValid = result.valid;
  if (chamValid) {
    championMenu.style.color = "rgba(255,255,255,1)";
  } else {
    championMenu.style.color = "rgba(255,255,255,0.2)";
  }
  updateSubmitButton();
});

function updateSubmitButton() {
  let submitButton = document.getElementById('submit');
  if (nameValid && lineValid && chamValid) {
    submitButton.classList.remove('hidden');
    submitButton.disabled = false;
  } else {
    submitButton.classList.add('hidden');
    submitButton.disabled = true;
  }
}
// function nameCheck(){
//   let nameMenu = document.getElementById('name.menu')
//   //includes메서드는 배열에 ()가 있는지 참거짓을 테스트함
//   let student = memberNames.includes(nameInput.value)

//   console.log(student)
//   console.log(nameInput.value)

//   if(student){
//     nameMenu.style.color = "rgba(255,255,255,1)";
//   } else {
//     nameMenu.style.color = "rgba(255,255,255,0.2)";
//   }
// }

// function lineCheck(){
//   let lineMenu = document.getElementById("line.menu");

//   console.log("lineCheck 작동중")
//   if(lineInput){
//     lineMenu.style.color = "rgba(255,255,255,1)";
//   } else {
//     lineMenu.style.color = "rgba(255,255,255,0.2)";
//   }
// }

// function chamCheck(){
//   console.log("chamCheck 작동중");
//   let championMenu = document.getElementById('champion.menu');
  
//   // 챔피언 이름만 담을 빈 배열 만들기
//   let cham = [];

//   // json 데이터에서 이름 객체 뽑아서 배열에 밀어넣기
//   for(let a in chams){
//     // console.log(a)
//     if(a === 'data'){
//       for(let b in chams[a]){
//         for(let c in chams[a][b])
//           if(c === 'name'){
//             cham.push(chams[a][b][c]);
//           }
//       }
//     }
//   }
  
//   for(let element of cham){
//     if(chamInput.value === element){
//       championMenu.style.color = "rgba(255,255,255,1)";
//       return;
//     } else {
//       championMenu.style.color = "rgba(255,255,255,0.2)";
//     }
//   }
// }



// nameInput.addEventListener('blur',nameCheck);
// lineInput.addEventListener('change',lineCheck);
// chamInput.addEventListener('blur',chamCheck);
