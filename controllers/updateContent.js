const accountsData = require("../public/database/accessPoint.js").accountsData;
const notesData = require("../public/database/accessPoint.js").notesData;
const express = require("express");
const updateNote = express.Router();

// Step 1
updateNote.post("/save",(req,res)=>{
    notesData.findOneAndUpdate({identificationNumber: req.identificationNumber},{contents: req.contents},{new: false});
})

// Step 2

