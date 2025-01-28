const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');
  

//POST route to add a person
router.post('/',async(req,res)=>{
    try{
const data = req.body
//create a new person document using the mongoose models
const newPerson =new Person(data);

//Save the new person to the database
const response = await newPerson.save();
console.log('data saved');
res.status(200).json(response);
    }

    catch(err){
console.log(err);
res.status(500).json({error:'Internal server error'});
    }
})

//GET method to get the person
router.get('/',async(req,res)=>{
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
}


    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

router.get('/:workType',async(req ,res)=>{
    try{
const workType= req.params.workType;
if(workType=='chef' || workType=='waiter' || workType=='manager'){
    const response = await Person.find({work:workType});
    console.log('response fetched');
    res.status(200).json(response);
}
else{
    res.status(404).json({error:'Invalid work Type'});
}
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'})
    }
})
module.exports = router;