const express = require('express')
const db=require('./db');
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require('dotenv').config();
const passport =require('./auth');
const Person = require('./models/Person');
const PORT = process.env.PORT || 3000;


app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local',{session:false})

const logRequest =(req , res, next)=>{
  console.log(`${new Date().toLocaleString()} Request made to :${req.originalUrl}`)
  next();
}


app.get('/' ,localAuthMiddleware , logRequest ,function (req, res) {
  res.send('Hello World')
})

app.use(logRequest);
//iport the router files
const personRoutes = require('./routes/personRoutes');
//use the routes
app.use('/person' ,localAuthMiddleware , personRoutes);

const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menu' ,localAuthMiddleware , menuItemRoutes);
  


app.listen(PORT,()=>{
  console.log("listening on port 3000");
})