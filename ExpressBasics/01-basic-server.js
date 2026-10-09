const express = require('express');

const app = express(); // server instance created

app.get("/",(req,res) => {
    res.send("Hello World")
})

app.get("/about",(req,res)=>{
    res.send("About page hai yo mero")
})

app.listen(3000,() => {  // starting the server 
    console.log("Server is listening")
})
