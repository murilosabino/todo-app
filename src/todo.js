const express = require('express')
const bp = require('body-parser')
const app = express()
const port = 3001
const usuario = require('./controllers/usuario-controller');
const tarefa = require('./controllers/tarefa-controller');
const tarefaModel = require('./models/tarefa.model');
const usuarioModel = require('./models/usuario.model');
const bd = require('./infra/bd');

app.use(express.json());

const user = new usuarioModel('murilo', 'murilo@email.com', 'senha123');
const task = new tarefaModel('ler', 'ler the witcher', 'em progresso', '12/07/2021');

app.get('/', (req, res) => {
  res.send(`Rota ativada`)
})

usuario(app, bd, usuarioModel);
tarefa(app, bd, tarefaModel);


app.listen(port)