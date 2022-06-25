const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:8SnrAl7TRMbp81oi@bookstore.6xyugsi.mongodb.net/mybooks?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to Mongo CLoud");
}).catch((e) => {
    console.log("Error Connecting DB :" + e);
});




//mongodb+srv://admin:8SnrAl7TRMbp81oi@bookstore.6xyugsi.mongodb.net/?retryWrites=true&w=majority
//8SnrAl7TRMbp81oi