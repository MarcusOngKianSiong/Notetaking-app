const express = require('express')
const app = express()
const mongoose = require("mongoose");
const authenticate = require("./controllers/authentication.js")

const PORT = process.env.PORT || 3000;

// ESTABLISHING DATABASE CONNECTION
// const db = mongoose.connection;
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/'+ `account`;
// mongoose.connect(MONGODB_URI);
// const authenticationSchema = {username: String,password: String};
// db.on('open' , ()=>{});
// const account = mongoose.model('accounts',authenticationSchema);
// // // account.create({username:"timmy",password:"123"},(error,creatingAcc)=>{
// // //     if(error){
// // //         console.log(error);
// // //     }else{
// // //         console.log("ACCOUNT CREATED: ",creatingAcc);
// // //     }
// // // })

app.use(express.static('public'))
app.use(express.urlencoded({extended:false}));
app.use('/login',authenticate);                                     // LOGIN STEP


app.get('/',(req,res)=>{
    console.log("------------LOGIN PAGE OPENING!!!--------"); 
    res.render('index.ejs',{
        loginFailed: false
    })
})

app.post('/login',authenticate)

app.listen(PORT,()=>{
    console.log("Listening to port 3000")
})

