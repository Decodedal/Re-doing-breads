//dependencies 
const express = require('express');
const baker = express.Router();
const Baker = require('../models/baker.js');
const bakerSeedData = require('../models/baker_seed');

baker.get('/',(req,res)=>{
    Baker.find()
         .populate('breads')
         .then(foundBakers=>{
            res.send(foundBakers)
         })
         .catch(err=>{
            console.log(err)
            res.render('error')
        })
})

//export
baker.get('/data/seed',(req,res)=>{
    Baker.insertMany(bakerSeedData)
         .then(()=>res.redirect('/breads'))
         .catch((err)=>{
            console.log(err)
            res.render('error')
        })
})


module.exports = baker