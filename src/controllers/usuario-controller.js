const user = 'murilo'

function usuario(app){
    app.get('/usuario', (req, res) => {
        res.send(`Rota ativada com GET e recurso ${user}`)
      })

}

module.exports = usuario;

