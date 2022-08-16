const express = require("express")
const methodOverride = require('method-override')
const mongoose = require('mongoose')

//Configuration 
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

//MIDDLE WARE
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('views',__dirname+'/views');
app.set('view engine','jsx');
app.engine('jsx',require('express-react-views').createEngine())
//connecting mongo
mongoose.connect(process.env.MONGO_URI,{useNEWUrlParser: true, useUnifiedTopology: true},()=>{
    console.log('connected to mongo:',process.env.MONGO_URI)
})

//ROUTES
app.get('/',(req,res)=>{
    res.send('welcome to our bread app');
})
//BREADS
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads',breadsController);

//error page
app.get('*',(req,res)=>{
    res.render('error')
})

//LISTEN
app.listen(PORT,()=> {
    console.log(`listing on Port ${PORT}`);
})