const express = require("express");
const creatingNewNote = express.Router();

db.on('open' , ()=>{});

creatingNewNote.get("/createNewNote",(req,res)=>{
    res.render('note.ejs')
})



module.exports = creatingNewNote;
