const mongoose = require('mongoose');
//creating short hand for schema
const{Schema} = mongoose

const breadSchema = new Schema({
  //will write our schema here
  name : {type: String, required: true},
  hasGluten: {type: Boolean},
  image: {type:String, default:'https://placekitten.com/500/500'},
  baker:{
      type:Schema.Types.ObjectID,
      ref:'Baker'
  }
})

//helper method 
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker}`;
}
//STATIC HELPER

// breadSchema.statics.findRachel= function{
// return this.find({baker:'Rachel'})
// }

//creating first Schema model
const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread