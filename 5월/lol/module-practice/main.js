import {memberNames} from "./name";

const input = document.getElementById('input');
function check(){
  
  let box = document.getElementById('box');
  memberNames.forEach(element => {
    if(input.value = element){
      box.style.backgroundColor = "rgba(255,200,200)";
    } else {
      box.style.backgroundColor = "";
    }
  });
}

input.addEventListener('input',check);