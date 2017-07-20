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
      console.log('Invalid option!')
    }
  }
}

module.exports = taco
