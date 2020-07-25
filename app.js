const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const db = mongoose.connection

mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.get('/', (req, res) => {
  res.send('restaurant list')
})

app.listen(port, (req, res) => {
  console.log(`Express is listening on http://localhost:${port}`)
})