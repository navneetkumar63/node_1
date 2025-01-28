const express = require('express')
const db=require('./db');
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//const Person = require('./models/Person');

app.get('/', function (req, res) {
  res.send('Hello World')
})
//iport the router files
const personRoutes = require('./routes/personRoutes');
//use the routes
app.use('/person', personRoutes);

const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menu',menuItemRoutes);





app.listen(3000,()=>{
  console.log("listening on port 3000");
})