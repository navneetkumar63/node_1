const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URL_LOCAL);
//mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection

db.on('connect',()=>{
    console.log('connected mongoDB server')
});

db.on('error', (err)=>{
    console.log('mongoDb connection error:',err)
});

db.on('disconnected',()=>{
    console.log('mongoDB disconnected')
});


module.exports=db;