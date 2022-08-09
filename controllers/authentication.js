const express = require("express");
const authenticate = express.Router();

// database access setup
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/'+ `account`;
mongoose.connect(MONGODB_URI);
const db = mongoose.connection;
const authenticationSchema = {username: String,password: String};
const account = mongoose.model('accounts',authenticationSchema);
db.on('open' , ()=>{}); 

authenticate.post('/login',(req,res)=>{
    console.log("STOPPED HERE!!!");
    // Data from user
    const username = req.body.username;
    const password = req.body.password;
    // Check if username exists
    account.find({username: username,password: password},(error,findings)=>{
        if(error){
            res.render('../views/test.ejs',{
                authenticationOutcome: "Something is wrong!!!!"
            });
        }else{
            if(findings.length === 0){
                res.render('../views/test.ejs',{
                    authenticationOutcome: "Nothing found!!!!"
                });
            }else{
                res.render('../views/test.ejs',{
                    authenticationOutcome: findings
                });
            }
            
        }
        
    })
})

// res.render('index.ejs',{
//     loginFailed: true
// })

module.exports = authenticate;