const express = require("express")

//Configuration 
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

//MIDDLE WARE
app.set('views',__dirname+'/views');
app.set('view engine','jsx');
app.engine('jsx',require('express-react-views').createEngine())

//ROUTES
app.get('/',(req,res)=>{
    res.send('welcome to our bread app');
})
//BREADS
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads',breadsController);

//LISTEN
app.listen(PORT,()=> {
    console.log(`listing on Port ${PORT}`);
})