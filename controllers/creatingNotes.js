const express = require("express");
const creatingNewNote = express.Router();

// Databases 
const accountsData = require("../public/database/accessPoint.js").accountsData;
const notesData = require("../public/database/accessPoint.js").notesData;

function createNewNote(){
    
}
function displayAllNotes(){
    let listOfNotes = [];
    
    return listOfNotes;
}

creatingNewNote.post('/createNewNote',(req,res)=>{
    console.log("-----CREATING NEW NOTE-----")
    // create a document in the collection
    // Gather a list of documents by name
    notesData.create({user: "marcus", name: "random", identificationNumber: "1", dependencies: "0", contents: "Something here"})
    notesData.find({user: "marcus"},(error,notes)=>{
        res.render('note.ejs',{
            notes: notes
        })    
    })
    
})



module.exports = creatingNewNote;
