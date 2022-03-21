const express = require('express');
const { body, validationResult } = require('express-validator')

const User= require("../models/user.model");
const uploads=require("../middlewares/upload")

const router = express.Router();

router.post("/",
body("firstName")
.not()
.isEmpty()
.withMessage("first name cannot be empty")
.isLength({min:3})
.withMessage("first name must be at least 3 characters"),
body("lastName")
.not()
.isEmpty()
.withMessage("last name cannot be empty")
.isLength({min:3})
.withMessage("last name must be at least 3 characters"),
body("age")
.not()
.isEmpty()
.withMessage("age cannot be empty")
.isNumeric()
.withMessage("age must be a number between 1 and 150")
.custom((val)=>{
    if(val < 1 || val>150){
      throw new Error("Incorrect age provided");
    }
    return true;
}),
body("email").not().isEmail().custom (async (value)=>{
    const user =await User.findOne({ email: value});
    if(user){
        throw new Error("Email already exits");
    }return true;
}),
body("profileImages").not().isEmpty().withMessage("only one image required")

,async (req, res) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

      const user = await User.create(req.body.user);
      
      return res.status(201).send(user);
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

module.exports=router;