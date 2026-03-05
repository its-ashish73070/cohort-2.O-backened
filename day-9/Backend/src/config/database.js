/* iss file me hm database se kaise connect krte hai uska pura code likhenge , database se connect krne ke liye hme mongoose ko require krna pdta hai   */
const mongoose = require("mongoose")

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected to DB")
    })
}

module.exports = connectToDB