const mongoose = require('mongoose');

require("dotenv").config();

exports.connect=() => {
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        // useUnifeidTopolgy: true,
    })
    .then(console.log("db connection established"))
    .catch((error)=>{
        console.log("db error");
        console.log(error);
        process.exit(1);
    });       
}