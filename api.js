const axios = require('axios')

const user = 'YOUR TRELLO USER' // ex: Taco
const key = 'YOUR TRELLO KEY' // https://trello.com/app-key
const token = 'YOUR TRELLO TOKEN' // https://trello.com/app-key

const membersUrl = `https://api.trello.com/1/members`
const boardsUrl = `https://api.trello.com/1/boards`

module.exports = {
  getBoards() {
    const fields = 'url&boards=open&board_fields=name'
    const completeUrl = `${membersUrl}/${user}?fields=${fields}&key=${key}&token=${token}`
    return axios.get(completeUrl)
      .then(res => {
        return res.data.boards
      })
      .catch(err => {
        return err
      })
  },
  getLists(boardId) {
    const completeUrl = `${boardsUrl}/${boardId}/lists?cards=none&key=${key}&token=${token}`
    return axios.get(completeUrl)
      .then(res => {
        return res.data
      })
      .catch(err => {
        return err
      })
  },
  getCards(boardId) {
    const completeUrl = `${boardsUrl}/${boardId}/cards?fields=id,name,idList,url&key=${key}&token=${token}`
    return axios.get(completeUrl)
      .then(res => {
        return res.data
      })
      .catch(err => {
        return err
      })
  }
}
