const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.listen(PORT,()=>{
    console.log("Listening to port 3000")
})