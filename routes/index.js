const express = require('express')
const controller1 = require('../controller/Todo_controller');
const { ExpressValidator } = require('express-validator');
const router = express.Router();

//Get all Todos
router.get('/todos',controller1.getTodos );
//Update todo by id
router.put('/todos/:id', controller1.updateTodo);
//Create Todo
router.post('/todos',controller1.createTodo);


module.exports = router;