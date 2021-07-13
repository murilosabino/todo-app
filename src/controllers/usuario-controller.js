const tarefaModel = require('../models/tarefa.model')
const usuarioModel = require('../models/usuario.model');

function usuario(app, bd, user){
    app.get('/usuario', (req, res) => {        
        res.send(bd.users)
      })
    
      app.post('/usuario', (req, res, next) => {
        let novoUsuario = new user(req.body.nome, req.body.email, req.body.senha);
        bd.users.push(novoUsuario)
        res.send('usuario criado')
      })
}

module.exports = usuario;

