const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use(  '/api', router) // todas as rotas iniciaram com /api

    // TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos') // ele vai usar todos os metodos declarados do todoService
    
}