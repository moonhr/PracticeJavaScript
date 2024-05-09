const fs = require('fs');

fs.writeFile('fsModule', 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

for(let index=40; index < 50; index++) {
  fs.mkdirSync(index + '_폴더');
}