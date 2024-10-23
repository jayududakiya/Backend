const express = require('express');
const mongoose = require('mongoose');
const morgan =  require('morgan');
require('dotenv').config();
const { testMail , userMail } = require('./controller/sendMail.controller');

mongoose.connect(process.env.mongoDB_URL).then(()=>console.log('mongoDb is Connected SussesFully')).catch((error)=>console.log('Error',error));

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/',(req,res)=>{
    res.send('Hello From Express Js');
});

app.get('/testMail',testMail);
app.get('/mail',userMail);

app.listen(process.env.PORT ,()=> console.log(`Server Is Start At http://localhost:${process.env.PORT}`));
