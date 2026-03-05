const mongoose = require('mongoose')

/* ab hmne mongoose require kr liye ab hm create krenge SCHEMA */
const noteSchema = new mongoose.Schema({
    title : String,
    description : String,
})
/*  to hmne upar jo bataya ki jo hamra notes hai uska format kya hai isiko hm schema bolte hai  */

/* ab hm ek model create kr rhe hai for CRUD Operation */
const noteModel =  mongoose.model("mama",noteSchema)

/* ab hm iss noteModel ko yaha se krenge export */
module.exports = noteModel