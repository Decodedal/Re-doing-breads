const mongoose = require('mongoose');
//creating short hand for schema
const{Schema} = mongoose

const breadSchema = new Schema({
  //will write our schema here
  name: {type: String, required: true},
  hasGluten: Boolean,
  image: {type:String, default:'https://placekitten.com/500/500'},
  baker:{
      type:Schema.Types.ObjectId,
      ref:'Baker'
  }
})

//helper method 
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`;
}
//STATIC HELPER

// breadSchema.statics.findRachel= function{
// return this.find({baker:'Rachel'})
// }

//creating first Schema model
const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread