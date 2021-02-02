const express = require('express')
const app = express()
const port = 3000

const hbs = require('hbs');
require('./helpers/helpers')

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', { name: 'jose', anio: new Date().getFullYear()})
})

app.get('/about', (req, res) => {

  res.render('about', { anio: new Date().getFullYear()})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})