const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete']) // metodos disponiveis para a aplicaçao
Todo.updateOptions({ new: true, runValidators: true }) // atualizar configuraçoes default do update

module.exports = Todo