const express = require("express");
const creatingNewNote = express.Router();

creatingNewNote.get("/createNewNote",(req,res)=>{
    res.render('note.ejs')
})



module.exports = creatingNewNote;
