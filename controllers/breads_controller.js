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

//New must be above show
breads.get('/new',(req,res)=>{
    res.render('new');
})



//SHOW
    breads.get('/:arrayIndex',(req,res)=>{
        // res.send(Bread[req.params.arrayIndex])
        if(Bread[req.params.arrayIndex]){
        res.render('show',{
            bread: Bread[req.params.arrayIndex],
            index: req.params.arrayIndex
        })
    }else{
        res.render('error')
    }
    });

    //create
    breads.post('/',(req,res)=>{
       if(!req.body.image){
        req.body.image = "http://placekitten.com/400/400"
       }
        if(req.body.hasGlutten === 'on'){
            req.body.hasGlutten === 'true';
        }else{
            req.body.hasGlutten === 'false'
        }
        Bread.push(req.body)
        res.redirect('/breads')
    })

   //edit
   breads.get('/:arrayIndex/edit',(req,res)=>{
    res.render('edit',{
        bread :Bread[req.params.arrayIndex],
        index:req.params.arrayIndex

    })
}) 

    //update
    breads.put('/:arrayIndex',(req,res)=>{
        if(req.body.hasGlutten === 'on'){
            req.body.hasGlutten === 'true';
        }else{
            req.body.hasGlutten === 'false'
        }
        Bread[req.params.arrayIndex] = req.body;
        res.redirect(`/breads/${req.params.arrayIndex}`);
    });

    //DELETE
    breads.delete('/:arrayIndex',(req,res)=>{
        Bread.splice(req.params.arrayIndex, 1);
        res.status(303).redirect('/breads');
    })

module.exports = breads;