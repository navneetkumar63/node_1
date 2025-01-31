const mongoose = require('mongoose');

const bcrypt = require('bcrypt');


const PersonSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    address:{
        type:String,
    },
    salary:{
        type:Number,
        required:true
    },
    username:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    }

})

PersonSchema.pre('save',async function(next){
    const person = this;
    if(!person.isModified('password'))
        return next();
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(person.password, salt);
        person.password = hashedPassword;
        next();
    }
    catch(err){
        return next(err);
    }
    }
    )
    
    PersonSchema.methods.comparePassword = async function(candidatePassword){
        try{
            const isMatch = await bcrypt.compare(candidatePassword,this.password);
            return isMatch;
        }
        catch(err){
            throw err;
        }
    }

const person= mongoose.model('person',PersonSchema);
module.exports = person;