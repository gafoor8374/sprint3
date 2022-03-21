const express = require('express');

const Comment = require("../models/book.model");

const router = express.Router();

router.post("/comments",async(req,res)=>{
    const comment= await Book.create(req.body)

    return res.status(201).send({book})
})

// router.get()

module.exports=router;