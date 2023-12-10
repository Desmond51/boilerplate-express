let express = require('express');
let app = express();

let name = "Hello World"
console.log(name)

app.get('/', (req, res)=>{
    res.send("Hello Express")
})




































 module.exports = app;
