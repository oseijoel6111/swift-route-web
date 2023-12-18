const express = require('express')
const urlController = require('../controllers/shortenerController')

const app = express.Router()

app.get('/', urlController.index)

app.post('/', urlController.create)

app.get('/:url', urlController.accessURL)

app.delete('/:url', urlController.remove)

module.exports = app