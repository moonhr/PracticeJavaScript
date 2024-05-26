//내보낼 함수
export function nameCheck(nameInput, submit){

  const memberNames = ["구하림","김보미","김수현","김정수","문혜림","배성빈","백지원","송이현","신지윤","유으뜸","유호영","이연승","이재영","이종수","임유진","정호연","조우식","조자연","최유진","황재민"]

  //includes메서드는 배열에 ()가 있는지 참거짓을 테스트함
  const student = memberNames.includes(nameInput.value)

  console.log(student)
  console.log(nameInput.value)

  if(student){
    submit.style.display = 'block';
    console.log('있음');
  } else {
    submit.style.display = 'none';
    console.log('아님');
  }
}
