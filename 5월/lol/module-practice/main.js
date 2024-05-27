import {memberNames} from "./name";


function check(){
  let input = document.getElementById('input');
  let box = document.getElementById('box');
  memberNames.forEach(element => {
    if(input.value = element){
      box.style.backgroundColor = "rgba(255,200,200)";
    } else {
      box.style.backgroundColor = "";
    }
  });
}