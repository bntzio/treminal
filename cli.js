const minimist = require('minimist')
const clear = require('clear')
const chalk = require('chalk')
const meow = require('meow')
const emoji = require('node-emoji')
const taco = require('./taco')

const argv = minimist(process.argv.slice(2))

const cli = meow({
  description: false,
  help: `
    ${chalk.white.bold('Usage')}
      ${chalk.hex('#51E898').bold('$ taco boards ls')}  ${chalk.hex('#00C2E0').bold('Show list of boards')}
      ${chalk.hex('#51E898').bold('$ taco boards <board>')}  ${chalk.hex('#00C2E0').bold('Show options for a specific board')}

    ${chalk.white.bold('Examples')}
      ${chalk.hex('#51E898').bold('$ taco boards ls')}
      ${chalk.hex('#51E898').bold('$ taco boards Tasks')}
  `
}, { // minimist options
  alias: {
    help: 'h',
    version: 'v'
  }
})

clear()

if (cli.input[0] === 'boards' || cli.input[0] === 'board') {
  console.log('')
  taco.boards(cli.input[1])
} else {
  console.log(chalk.hex('#F5DD29').bold('Invalid command!') + ' ' + emoji.get('grimacing'))
  console.log(cli.help)
  process.exit(0)
}
