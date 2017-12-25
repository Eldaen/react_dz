const express = require('express')

const app = express()

app.use(express.static('files'))

app.get('/', app.use(express.static('.')))

app.get('/about', app.use(express.static('.')))
app.get('/repos', app.use(express.static('.')))

app.listen(3000)
