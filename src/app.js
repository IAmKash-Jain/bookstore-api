//Secton : Require
require("../src/db/conn");
const express = require("express");
const storeRoute = require("../src/routers/storeRoute");
//End Section: Require

const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(storeRoute);


//Section : Start Express
app.listen(port, () => {
    console.log("Express Connected Succesfully @port :" + port);
});
//End Section : Start Express

//8SnrAl7TRMbp81oi