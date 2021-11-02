const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose
.connect('mongodb+srv://hejh:0713@cluster0.iauhn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('mongoDB Connected...'))
.catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log('example app listening on port $(port)!'))