const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/chicken',function(req,res){
    res.send("chicken is created")
})

app.listen(3000)