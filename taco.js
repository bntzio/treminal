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
              res.forEach(list => {
                console.log(list.name)
              })
            })
          }
        })
      })
    }
  }
}

module.exports = taco
