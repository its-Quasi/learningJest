const axios = require('axios')
const URL = 'https://jsonplaceholder.typicode.com/users'

const handlers = ({axios}) => ({
  get: async (req, res) => {
    const {data} = await axios.get(URL)
    res.send(data)
  },
  post: async (req, res) => {
    const {body} = req
    console.log(body)
    const {data} = await axios.post(URL, body)
    res.sendStatus(201)
  },
  put:  async (req, res) => {
    const {body} = req
    const {id} = req.params
    const {data} =  await axios.put(URL+'/'+id , body)
    res.sendStatus(204)
  },
  delete: async (req, res) => {
    const {id} = req.params
    await axios.delete(URL+'/'+id)
    res.sendStatus(204)
  },
})

module.exports = handlers