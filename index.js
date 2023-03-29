const express = require('express')
const app = express()
const port = 3500

app.get('/', (req, res) => {
  res.send('<h1>Olá mundo!<h1>')
})

app.listen(port, () => {
  console.log(`Acesse o endereço 'http://localhost:${port}' para ver o site`)
})
