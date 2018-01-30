const express = require("express");
const app = express();

const port = process.env.PORT || 3000; //makes everything public, heroku has it's own ports

app.get("/", (req, resp)=>{
    resp.end("Hi, welcome to my Heroku app");
})

app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("port is running");
})