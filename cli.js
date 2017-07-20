#! /usr/bin/env node
const yargs = require('yargs')
const taco = require('./taco')

const argv = yargs
  .option('boards ls', {
    type: 'array',
    desc: 'Show list of boards'
  })
  .option('boards <board>', {
    type: 'array',
    desc: 'Show options for a specific board'
  })
  .help()
  .argv;

const tacoRun = (args) => {
  if (args.length === 2) {
    switch (args[0]) {
      case 'boards':
        taco.boards(args[1]);
        break;
      default:
        console.log('Default option...')
    }
  } else {
    console.log('Not enough arguments!')
  }
}

tacoRun(argv._)
