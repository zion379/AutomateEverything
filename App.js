const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

const path = require('path')

app.get('/', function (req, res) {
    //res.sendFile('/../html/Main.html');
    res.sendFile(__dirname + '/html/Main.html')
})

app.listen(3000)