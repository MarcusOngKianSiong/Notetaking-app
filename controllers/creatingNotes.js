const express = require("express");
const creatingNewNote = express.Router();

const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/' + `account`;
mongoose.connect(MONGODB_URI);
const db = mongoose.connection;
const authenticationSchema = {username: String,password: String};
const notes = mongoose.model('notes',{user: String, identification: String, dependencies: Number});

// const account = mongoose.model('accounts',authenticationSchema);
db.on('open' , ()=>{});

creatingNewNote.get("/createNewNote",(req,res)=>{
    res.render('note.ejs',{
        notes: "something"
    })
})



module.exports = creatingNewNote;
