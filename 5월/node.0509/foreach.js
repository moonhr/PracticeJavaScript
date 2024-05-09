const studentNamesArray = require('./names-data');

studentNamesArray.forEach((name) => {
  console.log(name);
});

function na(array){
  for(let i = 0; i < array.length; i++){
    let name = array[i];
    console.log(name);
  }
}

