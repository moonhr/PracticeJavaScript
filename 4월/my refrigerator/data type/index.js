let today = new Date();

let month = (today.getMonth() +1).toString().padStart(2,'0');
let day = today.getDate().toString().padStart(2, '0');

const mmdd = `${month}:${day}`;
console.log(mmdd);
document.write(mmdd);