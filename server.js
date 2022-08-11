const express = require('express');
const accountsData = require("./public/database/accessPoint.js").accountsData;
const notesData = require("./public/database/accessPoint.js").notesData;
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection',(socket)=>{
    console.log('a user is connected...');
})

// Controllers
const authenticate = require("./controllers/authentication.js")
const createNewNote = require("./controllers/creatingNotes.js");
const { Socket } = require('dgram');



// model
app.post('/createNewNote',createNewNote);
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}));
app.use('/login',authenticate);                                     // LOGIN STEP
app.use('/createNewNote',createNewNote);

app.get('/',(req,res)=>{
    console.log("------------LOGIN PAGE OPENING!!!--------"); 
    res.render('index.ejs',{
        loginFailed: false
    })
})

app.post('/login',authenticate);

const PORT = process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log("Listening to port 3000");
})

