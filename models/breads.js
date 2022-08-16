const mongoose = require('mongoose');
//creating short hand for schema
const{Schema} = mongoose

const breadSchema = new Schema({
  //will write our schema here
  name : {type: String, required: true},
  hasGluten: Boolean,
  image: {type:String, default:'https://placekitten.com/500/500'}
})

//creating first Schema model
const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread