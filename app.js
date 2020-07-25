const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('restaurant list')
})

app.listen(port, (req, res) => {
  console.log(`Express is listening on http://localhost:${port}`)
})