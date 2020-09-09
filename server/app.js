const express = require('express')
const admin = require('./router/admin')
const blog = require('./router/blog')
const bodyParser = require('body-parser')
const app = express()

app.use(require('cors')())
app.use(bodyParser.json());
app.use(admin)
app.use(blog)

// app.get('/home', (req, res) => res.send('Hello World!'))

// nodemon app
app.listen(8000, () => console.log('Example app listening on port 8000!'))