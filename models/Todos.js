const sequelize = require('sequelize')

const db = require('../config/pg_config');


const todos = db.define('todos', {
    id: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: sequelize.STRING,
        allowNull: false
    },
    description: {
        type: sequelize.TEXT,
        allowNull: true
    },
    status: {
        type: sequelize.STRING,
        allowNull: false,
        defaultValue: 'PENDING'
    }
})

todos.sync({})

module.exports = todos;