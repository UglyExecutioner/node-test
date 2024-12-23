const sequelize = require('sequelize')

const db = new sequelize.Sequelize(
    process.env.SCHEMA,
    process.env.PORT,
    process.env.HOST,
    {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        dialect: process.env.DIALECT
    }
)

module.exports = db;