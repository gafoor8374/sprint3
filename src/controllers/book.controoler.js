const express = require('express');

const Book= require("../models/book.model");

const router = express.Router();

router.post("/books",async(req,res)=>{
    const book= await Book.create(req.body)

    return res.status(201).send({book})
})

// router.get()

module.exports=router;
