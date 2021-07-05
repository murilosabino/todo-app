table usuario {
  id int pk
  senha varchar(50)
  nome varchar(50)
  email varchar(50)
}

table tarefas {
  id_usuario int pk
  data datetime
  status boolean
  descricao varchar(50)
}