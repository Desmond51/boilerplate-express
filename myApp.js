let express = require('express');
let app = express();

let newFile= __dirname + 'views/index.html';

app.get('/', (req, res)=>{
    res.send(newFile)
})




































 module.exports = app;
