const express = require('express')
const app = express()
const port = 8000

app.get('/cars/', (req, res) => {
  res.render(__dirname + '/cars.twig')
})

app.get('/cars', (req, res) => {
  res.render(__dirname + '/cars.twig')
})

app.get('/cars/:brand', (req, res) => {
  res.render(__dirname + '/model.twig')
})

app.get('/cars/:brand/:car', (req, res) => {
  const brand=req.params.brand
  const car=req.params.car
  res.send(`<h3>Wybrałeś samochód ${car} marki ${brand} </h3>`);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})