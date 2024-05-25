app.post('/process-content', (req,res) => {
  try {
    // 연락처를 데이터베이스나 파일 등의 저장 장소에 보관해야하지만 오류만 시뮬레이트
    if(req.body.simulateError)
      throw new Error("error saving eontact!")
    console.log(`conteact grom ${req.body.name} <${req.body.email}>`)
    res.format({
      'text/html' : () => res.redirect(303, '/thank-you'),
      'application/json' : () => res.json({ success : true }),
    })
  } catch(err) {
    //저장에 문제가 발생했을 경우 여기서 처리
    console.error(`error processing contact trom ${req.body.name}` + `<${req.body.email}>`)
    res.format({
      'text/html' : () => res.redirect(303, '/contact-error'),
      'application/json' : () => res.status(500).json({
        error: 'error saving contact information'}),
    })
  }
})