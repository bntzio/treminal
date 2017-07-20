const axios = require('axios')

const user = 'YOUR TRELLO USER' // ex: Taco
const key = 'YOUR TRELLO KEY' // https://trello.com/app-key
const token = 'YOUR TRELLO TOKEN' // https://trello.com/app-key

const url = `https://api.trello.com/1/members/${user}?`

module.exports = {
  getBoards() {
    const fields = 'url&boards=open&board_fields=name'
    const completeUrl = `${url}fields=${fields}&key=${key}&token=${token}`
    return axios.get(completeUrl)
      .then(res => {
        return res.data.boards
      })
      .catch(err => {
        return err
      })
  }
}
