/* ab is file me hme ek package require krna pdta hai jiska nam hai mongoose */
const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected to DB")
    })                
                    }

/* ab problem ye hai ki jo hmne function create kiya hai jo hamre server ko database se connect krta hai ise create kiya database.js file me , lekin ise hme call krna hai server.js file me  */
/* To hme ise yaha se krna hoga export */

module.exports = connectToDb

/* ab ise hmne export kr diya ab hme ise server.js file me jake require krna hoga */