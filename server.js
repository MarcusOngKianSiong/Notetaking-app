const express = require('express');
const accountsData = require("./public/database/accessPoint.js").accountsData;
const notesData = require("./public/database/accessPoint.js").notesData;
const mongoose = require("mongoose");
const app = express();

// Controllers
const authenticate = require("./controllers/authentication.js")
const createNewNote = require("./controllers/creatingNotes.js")

// model




app.use(express.static('public'))
app.use(express.urlencoded({extended:false}));
app.use('/login',authenticate);                                     // LOGIN STEP

app.get('/createNewNote',createNewNote);

app.get('/',(req,res)=>{
    console.log("------------LOGIN PAGE OPENING!!!--------"); 
    res.render('index.ejs',{
        loginFailed: false
    })
})

app.post('/login',authenticate)

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Listening to port 3000")
})

