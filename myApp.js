let express = require('express');
let app = express();


app.get('/json', (req, res)=>{
    res.json({"message": "Hello json"});
})

app.use(
  express.static("https://boilerplate-express-apvp.onrender.com/json")
);




































 module.exports = app;
