const express = require('express');
const app = express();

const notes = []

app.post("/notes",(req,res)=>{
    res.send("note created")
})











app.listen(3000 , ()=>{
    console.log("server is running on port 3000")
});