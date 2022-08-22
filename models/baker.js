//dependencies
const mongoose = require('mongoose');
const {Schema} = mongoose;
const Bread = require('./breads');


//shema 
const bakerSchema = new Schema({
    name:{
        type:String,
        required:true,
        enum: ['Rachel','Monica','Chandler','Joey','Ross','Phoebe']
    },
    startDate:{
        type:Date,
        required:true
    },
    bio:String
})

bakerSchema.virtual('breads',{
    ref:'Bread',
    localField:'_id' ,
    foreignField:'baker',

},{toJSON: {virtuals:true }})

//hooks
bakerSchema.post('findOneAndDelete',function(){
    Bread.deleteMany({baker:this._conditions._id})
         .then(deleteStatus=>{
            console.log(deleteStatus)
         })
         .catch(err=>{
            console.log(err)
         })        
})

//module and export
const Baker = mongoose.model("Baker", bakerSchema)
module.exports = Baker