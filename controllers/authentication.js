const { compare } = require("bcrypt");
const express = require("express");
const { connections } = require("mongoose");
const authenticate = express.Router();
const accountsData = require("../public/database/accessPoint.js").accountsData;
const notesData = require("../public/database/accessPoint.js").notesData;

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
                notesData.find({username: "marcus"},(error,notes)=>{
                    console.log("HERE: ",findFirst());
                    notesData.find((error,notes)=>{
                        res.render('../views/note.ejs',{
                            notes: notes,
                            identificationNumber: notes[0].identificationNumber
                        });    
                    })
                })
                
            }
        }
    })
})

// res.render('index.ejs',{
//     loginFailed: true
// })

module.exports = authenticate;