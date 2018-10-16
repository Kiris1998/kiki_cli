'use strict'
const exec = require('child_process').exec
const projectUrl = 'https://github.com/Kiris1998/kiki_cli.git'
module.exports = () => {
  console.log('kiki is building')
  let commandStr = `git clone ` + projectUrl
  exec(commandStr,(err,stdout,stderr) => {
    if (err) {
      console.log(err)
      process.exit()
    }
    console.log("The scaffold is buliding")
    process.exit()
  })
}
