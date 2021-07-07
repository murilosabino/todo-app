const user = 'murilo'

function usuario(app){
    app.get('/usuario', (req, res) => {
        res.send(`Rastreamento da aplicação sendo feito com nodemon -- \n\n
        Rota ativada com GET e recurso ${user}`)
      })
    
      app.post('/usuario', (req, res) => {
        res.send(`Rota ativada com POST e recurso ${user}`)
      })
}

module.exports = usuario;

