const task = 'ler'

function tarefa(app){
    app.get('/usuario/tarefa', (req, res) => {
        res.send(`Rota ativada com GET e recurso ${task}`)
      })
    
}

module.exports = tarefa;