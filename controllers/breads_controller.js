const express = require('express');
const breads = express.Router();
const Bread = require('../models/breads')

//INDEX
breads.get('/',(req,res)=>{
    Bread.find()
    .then(foundBreads=>{
        res.render('Index',{
            breads:foundBreads,
            title:'Index page'
        })
    })
    .catch(err=>{
        res.render('error')
        console.log(err)
    })
   
});

//New must be above show
breads.get('/new',(req,res)=>{
    res.render('new');
})



//SHOW
    breads.get('/:id',(req,res)=>{
        // res.send(Bread[req.params.arrayIndex])
    Bread.findById(req.params.id)
         .then(foundBread=>{
            res.render('show',{
                bread:foundBread
            })
         })
        })


    //create
    breads.post('/',(req,res)=>{
        console.log(req.body)
       if(!req.body.image){
        req.body.image = undefined
       }
        if(req.body.hasGlutten === 'on'){
            req.body.hasGlutten === 'true';
        }else{
            req.body.hasGlutten === 'false'
        }
        Bread.create(req.body)
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
    breads.delete('/:id',(req,res)=>{
        Bread.findByIdAndDelete(req.params.id)
        .then(deletedBread=>{
            res.status(303).redirect('/breads')
        })
        .catch(err=>{console.log(err)})
    })

module.exports = breads;