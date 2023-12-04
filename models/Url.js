const dbConnect = require('../dbConfig/connect')
const {Sequelize,DataTypes} = require('sequelize')

const Url = dbConnect.define('Url', {
    id: {
        primaryKey: true,
        type:DataTypes.INTEGER,
        autoIncrement: true
    },
    key: {
        type: DataTypes.STRING,
        unique:true
    },
    long_url: {
        type: DataTypes.STRING,
        unique:true,
    },
    short_url: {
        type: DataTypes.STRING,
        unique:true
    }
})

Url.sync()

module.exports = Url;