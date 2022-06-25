const express = require("express");
const app=express();

const port = process.env.PORT || 8000;

app.use(express.json());

app.listen(port ,()=>{
    console.log("Express Connected Succesfully @port :"+port);
});


