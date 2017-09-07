
const express = require('express');
const fs = require('fs');
const os = require('os');
const app = express();


var port = process.env.PORT || 8080;

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.get('/ala', function (req, res) {

    // res.redirect('back');

    res.send({
        "name":"slawek",
        "age":1970
    })

});

app.listen(port, function () {
    console.log('Example app listening on port 3000!')
});