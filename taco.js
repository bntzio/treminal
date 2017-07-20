const inquirer = require('inquirer')
const api = require('./api')

const taco = {
  boards(arg) {
    if (arg === 'ls') {
      console.log('')
      console.log('Showing boards...')
      console.log('')
      const promise = api.getBoards()
      promise.then(res => {
        res.forEach(board => {
          console.log(board.name)
        })
      })
    } else {
      const promise = api.getBoards()
      promise.then(res => {
        res.forEach(board => {
          if (board.name === arg) {
            const promise = api.getLists(board.id)
            promise.then(res => {
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
    promise.then(res => {
      res.forEach(card => {
        if (card.idList === selectedItem.id) {
          console.log(card.name)
        }
      })
    })
  }).catch(err => {
    console.log('')
    console.log('Something went wrong.')
    process.exit(0)
  })
}

module.exports = taco
