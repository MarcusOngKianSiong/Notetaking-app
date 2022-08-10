const express = require("express");
// Databases 
const accountsData = require("../public/database/accessPoint.js").accountsData;
const notesData = require("../public/database/accessPoint.js").notesData;

const creatingNewNote = express.Router();

creatingNewNote.get("/createNewNote",(req,res)=>{
    res.render('note.ejs')
})



module.exports = creatingNewNote;
