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

function retrieveListOfNotesFromDatabase(name){
    // Get the name of the notes, number, owner name
    
}

authenticate.post('/login',(req,res)=>{
    console.log("STOPPED HERE!!!");
    // Data from user
    const username = req.body.username;
    const password = req.body.password;
    // Check if username exists
    account.find({username: username,password: password},(error,findings)=>{
        if(error){
            res.render('../views/note.ejs',{
                authenticationOutcome: "Something is wrong!!!!"
            });
        }else{
            if(findings.length === 0){
                res.render('../views/index.ejs',{
                    loginFailed: true
                });
            }else{
                const notes = notes.find({username: "marcus"},(error,notes)=>{
                    console.log(notes)
                })
                res.render('../views/note.ejs',{
                    notes: ["something","nothing"] 
                });
            }
        }
    })
})

// res.render('index.ejs',{
//     loginFailed: true
// })

module.exports = authenticate;