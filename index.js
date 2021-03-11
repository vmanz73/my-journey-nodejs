const express = require('express')
const app = express()
const port = 4000
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  const items = [
    {fn:'vman',ln:'maulana',ac:'@vman'},
    {fn:'ads',ln:'maulana',ac:'@ads'},
    {fn:'wid',ln:'maulana',ac:'@wid'}
  ]
  const title = {title:'index'}
  res.render('index', {items : items, title: title})
})

app.get('/about',(req, res) => {
    const title = {title:'about'}
    res.render('about', {title: title})
})

app.get('/add-user',(req, res) => {
  const title = {title:'add item'}
  res.render('add', {title: title})
})

app.use((req, res) => {
    const title = {title:'error not found'}
    res.render('404', {title: title})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})