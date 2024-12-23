const todoService = require('../services/Todo_Service')

async function getTodos(req,res,next) {
    try {
        const todos = await todoService.getAllTodos()
        res.status(200).json({success: 1, data: todos});
    } catch (error) {
        console.log("Error at getData",getData)
    }
}

async function getTodoById(req, res, next) {
    try {
        const id = req.params.id;
        const todo = await todoService.getTodoById(id);
        res.status(200).json({success: 1, data: todo})
    } catch (error) {
        console.log("Error at getTodoById", error)
    }
}

async function createTodo(req, res, next) {
    try {
        const { title, description, status } = req.body;
        if (!title) {
            return res.status(400).json({success:0, message: 'Title must be present'})
        }
        if (!description) {
            return res.status(400).json({success:0, message: 'Description must be present'})
        }
        if (!status) {
            return res.status(500).json({success:0, message: 'Status must be present'})
        }
        const createdTodo = await todoService.createTodo({title,description,status})
        res.status(200).json({success: 1, data: createdTodo});
    } catch (error) {
        console.log("Error at create todo", error)
    }
}

async function updateTodo(req, res, next) {
    try {
        const id = req.params.id;
        let body = req.body;
        body.id = id;
        const update = await todoService.update(body)
        res.status(200).json({success: 1, data: update});
    } catch (error) {
        console.log("Error at updateTodo", error)
    }
}

async function deleteTodo(req, res, next) {
    try {
        const id = req.params.id;
        const deletedTodo = await todoService.deleteTodo(id);
        res.status(200).json({success: 1, data: deleteTodo});
    } catch (error) {
        console.log("Error at delete todo", error)
    }
}

module.exports = {
    getData,
    getTodoById,
    createTodo,
    updateTodo
}
