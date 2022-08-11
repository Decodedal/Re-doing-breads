const express = require('express');
const breads = express.Router();
const Bread = require('../models/breads')

//INDEX
breads.get('/',(req,res)=>{
    // res.send(Bread);
    res.render('Index',{
        breads:Bread,
        title:'Index page'
    })
});

//SHOW
    breads.get('/:arrayIndex',(req,res)=>{
        res.send(Bread[req.params.arrayIndex])
    })

module.exports = breads;