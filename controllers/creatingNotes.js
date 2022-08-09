const express = require("express");
const creatingNewNote = express.Router();

const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/' + `account`;
mongoose.connect(MONGODB_URI);
const db = mongoose.connection;
const authenticationSchema = {username: String,password: String};
const level1 = mongoose.model('level 1',{contents: String}); 
// const account = mongoose.model('accounts',authenticationSchema);
db.on('open' , ()=>{}); 

creatingNewNote.get("/createNewNote",(req,res)=>{
    const collections = db.listCollections();
    console.log(collections)
    res.render("note.ejs",{ 
        authenticationOutcome: "success",
        collections: collections
    })
})

module.exports = creatingNewNote;
