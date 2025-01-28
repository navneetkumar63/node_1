const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

//Post method to MENu item
router.post('/',async(req,res)=>{
  try{
      const data = res.body
      const newMenu = new MenuItem(data);
      const response = await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);
}
  catch(err){
      console.log(err);
      res.status(500).json({error:"Invalid server error"});
  }
})

router.get('/',async(res,req)=>{
  try{
const data = await MenuItem.find();
console.log('data fetched');
res.status(200).json(data);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
}
})

module.exports = router;