const { compare } = require("bcrypt");
const express = require("express");
const authenticate = express.Router();
const accountsData = require("./public/database/accessPoint.js").accountsData;
const notesData = require("./public/database/accessPoint.js").notesData;

authenticate.post('/login',(req,res)=>{
    console.log("STOPPED HERE!!!");
    // Data from user
    const username = req.body.username;
    const password = req.body.password;
    // Check if username exists
    accountsData.find({username: username,password: password},(error,findings)=>{
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
                // const notes = notesData.find({username: "marcus"},(error,notes)=>{
                //     console.log(notes)
                // })
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