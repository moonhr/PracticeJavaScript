
/**
 * 
 * @param {*} string 
 */
function work(string) {
  try {
    if(typeof(string) === 'string'){
        console.log(string);
    }

  } catch(error) {
    console.error('에러');
  }
}

work('안녕');
work(1);
work(true);
work({name:'문혜림'});