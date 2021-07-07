const express = require('express')
const app = express()
const port = 3001
const usuario = require('./controllers/usuario-controller');
const tarefa = require('./controllers/tarefa-controller');

app.get('/', (req, res) => {
  res.send(`Rota ativada`)
})

usuario(app)
tarefa(app)


app.listen(port)