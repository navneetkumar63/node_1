const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hotels');

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