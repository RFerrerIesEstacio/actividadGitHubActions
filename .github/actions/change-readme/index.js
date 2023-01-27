const fs = require('fs');
const core = require('@actions/core');
const memeMaker = require('meme-maker')

const result = core.getInput('resultado-tests');
const imagePath = (result === 'success' ? '.github/actions/change-readme/img/good.jpg' : '.github/actions/change-readme/img/bad.jpg');
const outPutName = (Math.random() + 1).toString(36).substring(7);
const topText = result === 'success' ? core.getInput('frase_positiva').toUpperCase() : core.getInput('frase_negativa').toUpperCase();
const bottomText = 'Y LO SABES';



let options = {
  image: imagePath,
  outfile: '.github/actions/change-readme/outputImg/' + outPutName,
  topText: topText,
  bottomText: bottomText,
  fontSize: 30,
  fontFill: '#FFFFFF'
}

memeMaker(options, function(err) {
  if(err) throw new Error(err)
  console.log('Image saved: ' + options.outfile);
  fs.appendFileSync('README.md',  `![alt text](https://github.com/RFerrerIesEstacio/actividadGitHubActions/blob/readme-job/.github/actions/change-readme/outputImage/${outPutName}?raw=true)\n`);
  core.setOutput('exit-status', 'Meme añadido al readme');
});