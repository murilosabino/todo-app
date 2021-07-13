const task = 'ler'

function tarefa(app, bd){
    app.get('/usuario/tarefa', (req, res) => {
        res.send(`Rota ativada com GET e recurso ${task}`)
      })
    
      app.post('/usuario/tarefa', (req, res) => {
        res.send(`Rota ativada com POST e recurso ${task}`)
      })
}

module.exports = tarefa;