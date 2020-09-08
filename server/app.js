const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const app = express()

app.use(require('cors')())
app.use(bodyParser.json());
app.use(router)

// app.get('/home', (req, res) => res.send('Hello World!'))

// nodemon app
app.listen(8000, () => console.log('Example app listening on port 8000!'))