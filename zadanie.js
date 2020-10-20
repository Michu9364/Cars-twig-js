const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cars', (req, res) => {
  res.sendFile(__dirname + '/cars.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})