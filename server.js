const express = require('express')
const app = express()
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// Database connection
const db = mongoose.connection;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/'+ `account`;
mongoose.connect(MONGODB_URI);
const authenticationSchema = {username: String,password: String};
db.on('open' , ()=>{});
const account = mongoose.model('accounts',authenticationSchema);
account.create({username:"marcus",password:"123"},(error,creatingAcc)=>{
    if(error){
        console.log(error);
    }else{
        console.log("ACCOUNT CREATED: ",creatingAcc);
    }
})

app.use(express.static('public'))
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    console.log("------------LOGIN PAGE OPENING!!!--------"); 

    account.find((err,res)=>{
        if(err){
            console.log("----ERROR------")
        }else{
            console.log("SEE THIS: ",res);
        }
    })
    res.render('index.ejs',{
        loginFailed: false
    })
})

app.post('/login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    res.render('index.ejs',{
        loginFailed: true
    })
})

app.listen(PORT,()=>{
    console.log("Listening to port 3000")
})