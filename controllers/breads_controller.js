const express = require('express');
const breads = express.Router();
const Bread = require('../models/breads')
const seedValues = require('../database/seed')

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

//SEED
breads.get('/data/seed',(req,res)=>{
    Bread.insertMany(seedValues)
          .then(seededBreads=>{
            res.redirect('/breads');
          })
          .catch(err=>{
            console.log(err)
            res.redirect('error')
          })
})

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
   breads.get('/:id/edit',(req,res)=>{
    Bread.findById(req.params.id)
         .then(foundBread =>{
            res.render('edit',{
                bread: foundBread
            });
         })
         .catch(err=>{console.log(err)})
}) 

    //update
    breads.put('/:id', (req, res) => {
        if(req.body.hasGluten === 'on'){
          req.body.hasGluten = 'true';
        } else {
          req.body.hasGluten = 'false';
        }
        Bread.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
          .then(updatedBread => {
            console.log(updatedBread) 
            res.redirect(`/breads/${req.params.id}`) 
          })
      })
      

    //DELETE
    breads.delete('/:id',(req,res)=>{
        Bread.findByIdAndDelete(req.params.id)
        .then(deletedBread=>{
            res.status(303).redirect('/breads')
        })
        .catch(err=>{console.log(err)})
    })

module.exports = breads;