//dependencies 
const express = require('express');
const baker = express.Router();
const Baker = require('../models/baker.js');
const bakerSeedData = require('../models/baker_seed');
const breads = require('./breads_controller.js');
//index
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

//SHOW
baker.get('/:id',(req,res)=>{
    Baker.findById(req.params.id)
         .populate({
            path:'breads',
            options:{limit:2}
         })
         .then(foundBaker=>{
            console.log(foundBaker.name)
            res.render('bakerShow',{
                baker:foundBaker
            })
         })
})

//Delete
baker.delete('/:id',(req,res)=>{
    Baker.findByIdAndDelete(req.params.id)
         .then(deleateBaker=>{
            res.status(303).redirect('/breads')
         })
         .catch(err=>{console.log(err)})
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