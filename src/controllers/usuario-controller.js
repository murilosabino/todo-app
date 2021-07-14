const tarefaModel = require('../models/tarefa.model')
const usuarioModel = require('../models/usuario.model');

function usuario(app, bd, user){
    app.get('/usuario', (req, res) => {        
        res.send(bd.users)
      })

    app.get('/usuario/:email', (req, res) => {
      let filtrado = bd.users.filter((el) => { 
        return el.email === req.params.email
        })
      res.json({
        result: filtrado
      })
    })

    app.post('/usuario', (req, res, next) => {
        const {nome, email, senha} = req.body
        let novoUsuario = new user(nome, email, senha);
        bd.users.push(novoUsuario)
        res.json({'message':'usuario criado'})
      })

    app.delete('/usuario/:email', (req, res)=>{
        let parametroEmail = req.params.email
        bd.users = bd.users.filter((item)=>{
          return item.email !== parametroEmail
        })
        res.json({
          message: `O usuario ${parametroEmail} foi deletado`
        })
      })
}

module.exports = usuario;

