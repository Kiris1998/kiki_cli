#!/user/bin/env node
'use strict'
const program = require('commander')
const infomation = require('../package.json')
const init = require('../command/init')

program.version = infomation.version
program.command('init')
       .description('Kiris help you build the scaffold')
       .alias('i')
       .action(() => {
          init()
       })
program.parse(process.argv)

if (!program.args.length) {
  program.help()
}


