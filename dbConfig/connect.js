const { Sequelize } = require("sequelize");

const DBName = process.env.DB_NAME
// const DBPort = process.env.DB_PORT
const DBConnection = process.env.DB_CONNECTION
const DBUser = process.env.DB_USERNAME
const DBPass = process.env.DB_PASSWORD
const DBHost = process.env.DB_HOST
const connection = new Sequelize(DBName,DBUser, DBPass, {
    dialect: `${DBConnection}`,
    host: DBHost
})

module.exports = connection