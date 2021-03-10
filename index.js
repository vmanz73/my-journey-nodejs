const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  const items = [
    {fn:'vman',ln:'maulana',ac:'@vman'},
    {fn:'ads',ln:'maulana',ac:'@ads'},
    {fn:'wid',ln:'maulana',ac:'@wid'}
  ]
  res.render('index', {items})
})

app.get('/about',(req, res) => {
    res.render('about')
})

app.get('/add-user',(req, res) => {
  res.render('add')
})

app.use((req, res) => {
    res.render('404')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})