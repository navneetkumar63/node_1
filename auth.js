const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/Person');

passport.use(new LocalStrategy(async(username,password,done)=>{
try{
  
    const user= await Person.findOne({username});
    if(!user)
        return done(null,false,{message:"Incorrect username"});

        const isPasswordMatch = await user.comparePassword(password);
        if(isPasswordMatch){
          return done(null,user);
        }
        else{
            return done(null,false,{message:'incorrect password.'});
        }

    }  
    

catch(err){
    return done(err);
}
}))

module.exports = passport;