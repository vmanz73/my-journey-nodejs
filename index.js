const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', {root: __dirname})
})

app.get('/about',(req, res) => {
    res.sendFile('./views/about.html', {root: __dirname})
})

app.get('/add-user',(req, res) => {
  res.sendFile('./views/add.html', {root: __dirname})
})

app.use((req, res) => {
    res.sendFile('./views/404.html', {root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})