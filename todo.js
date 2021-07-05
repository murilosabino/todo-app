const express = require('express')
const app = express()
const port = 3001
const usuario = 'murilo'
const tarefa = 'ler'

app.get('/usuario', (req, res) => {
  res.send(`Rota ativada com GET e recurso ${usuario}`)
})

app.get('/usuario/tarefa', (req, res) => {
    res.send(`Rota ativada com GET e recurso ${tarefa}`)
  })

app.listen(port)