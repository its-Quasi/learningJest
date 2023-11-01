const express = require('express')
const bodyParser = require('body-parser')
const {users} = require('./endpoints')
const { default: axios } = require('axios')
const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const handlerUser = users({axios})

app.get('/', handlerUser.get)
app.post('/', handlerUser.post)
app.delete('/:id',handlerUser.delete)
app.put('/:id', handlerUser.put)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})