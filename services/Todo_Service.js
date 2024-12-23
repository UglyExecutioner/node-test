const todos = require('../models/Todos');


async function createTodo (payload) {
    try {
        const createTodo = await todos.create(payload);
        return createTodo;
    } catch (error) {
        console.log("Error at createUser",error)
    }
}

async function update(payload) {
    try {
        const updateTodo = await todos.update(payload, {where:{id: payload?.id}});
        return updateTodo;
    } catch (error) {
        console.log("Error at update",error)
    }
}

async function getAllTodos () {
    try {
        const todos = await todos.findAll({raw: true});
        return todos;
    } catch (error) {
        console.log("Error at getAllTodos", error)
    }
}

async function getTodoById(id) {
    try {
        const todo = await todos.findOne({where:{id: id}, raw: true})
        return todo;
    } catch (error) {
        console.log("Error at getTodoById", error)
    }
}

async function deleteTodo(id) {
    try {
        const todo = await todos.destroy({where:{id: id}})
        return todo;
    } catch (error) {
        console.log("Error at deleteTodo", error)
    }
}

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    update,
    deleteTodo
}