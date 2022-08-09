const express = require("express");
const creatingNewNote = express.Router();

const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/' + `account`;
mongoose.connect(MONGODB_URI);
const db = mongoose.connection;
const authenticationSchema = {username: String,password: String};
const account = mongoose.model('accounts',authenticationSchema);
db.on('open' , ()=>{}); 

creatingNewNote.post("/createNewNote",(req,res)=>{
    const collections = db.collections();
    res.render("note.ejs",{
        collections: collections
    })
})

module.exports = creatingNewNote;
