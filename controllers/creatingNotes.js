const express = require("express");
const creatingNewNote = express.Router();

// Databases 
const accountsData = require("../public/database/accessPoint.js").accountsData;
const notesData = require("../public/database/accessPoint.js").notesData;

function createNewNote(){
    notesData.create({user: "marcus", name: "random", identificationNumber: "1", dependencies: "0", contents: "Something here"})
}
function displayAllNotes(){
    let listOfNotes = [];
    notesData.find({user: "marcus"},(error,notes)=>{
        notes.forEach(element => {
            listOfNotes.push(element.name);
        });  
    })
    return listOfNotes;
}

creatingNewNote.post('/createNewNote',(req,res)=>{
    console.log("-----CREATING NEW NOTE-----")
    // create a document in the collection
    createNewNote();
    // Gather a list of documents by name
    const listOfNotes = displayAllNotes();
    res.render('note.ejs',{
        notes: listOfNotes
    })
})



module.exports = creatingNewNote;
