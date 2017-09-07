const express = require('express')
const app = express()

var port = process.env.PORT || 8080

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/ala', function (req, res) {
    res.send('ALA dziala!')
})

app.listen(port, function () {
    console.log('Example app listening on port 3000!')
})