const inquirer = require('inquirer')
const ora = require('ora')
const chalk = require('chalk')
const api = require('./api')

const spinner = ora({ spinner: 'pipe', color: 'blue' })

const taco = {
  boards(arg) {
    if (arg === 'ls') {
      const promise = api.getBoards()
      spinner.start(['Loading boards'])
      promise.then(res => {
        spinner.clear()
        res.forEach(board => {
          console.log(chalk.hex('#0079BF').bold(`> ${board.name}`))
        })
        console.log('')
        spinner.succeed(['Done!'])
      })
    } else {
      const promise = api.getBoards()
      promise.then(res => {
        res.forEach(board => {
          if (board.name === arg) {
            const promise = api.getLists(board.id)
            spinner.start(['Loading lists'])
            promise.then(res => {
              spinner.stop()
              let payload = []
              res.forEach(list => {
                let obj = { id: list.id, name: list.name }
                payload.push(obj)
              })
              prompt(board.id, payload)
            })
          }
        })
      })
    }
  }
}

const buildOpts = payload => {
  let choices = []
  payload.forEach(p => {
    choices.push(p.name)
  })
  const opts = [{
    type: 'list',
    name: 'board',
    message: 'What do you want to do?',
    choices
  }]
  return [opts, payload]
}

const prompt = (boardId, payload) => {
  const opts = buildOpts(payload)
  inquirer.prompt(opts[0]).then(answer => {
    const list = answer.board
    const selectedItem = payload.find(el => {
      return el.name === list
    })
    const promise = api.getCards(boardId)
    console.log('')
    spinner.start(['Loading cards'])
    promise.then(res => {
      spinner.clear()
      res.forEach(card => {
        if (card.idList === selectedItem.id) {
          console.log(chalk.hex('#0079BF').bold(`> ${card.name}`))
        }
      })
      console.log('')
      spinner.succeed(['Done!'])
    })
  }).catch(err => {
    console.log('')
    console.log('Something went wrong.')
    process.exit(0)
  })
}

module.exports = taco
