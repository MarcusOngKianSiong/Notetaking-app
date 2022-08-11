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
    // Find the last note
    let identification = 0;
    notesData.find((error,notes)=>{
        if(notes.length !== 0){
            identification = notes.length+1;
        }else{
            identification = 1;
        }
        notesData.create({user: "marcus", name: "random", identificationNumber: identification, dependencies: "0", contents: "Write Something"});
    })
    setTimeout(function(){
        notesData.find({identificationNumber: identification},(error,notes)=>{
            res.render('note.ejs',{
                notes: notes,
                identificationNumber: notes[notes.length-1].identificationNumber
            })
        })
    }, 500); 
})



module.exports = creatingNewNote;
