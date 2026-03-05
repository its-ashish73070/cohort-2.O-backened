/* iss file ka main kam hota hai server ko create krna  */

const express = require("express") /* yaha pr hmne jo package install kiya tha express use yaha pr require kr rhe hai  */
/* requiring noteModel from file note.model.js for performing CRUD operation jo models folder ke andr note.model file me hai*/
const noteModel = require("./models/note.model")



const app = express();   /* ab jo hmne express require kiya tha use krenge call jisse hamara server create ho jayega */
/* creating a middleware */
app.use(express.json())


/* ab hm ek api create kr rhe hai jiska method post hai and iss api ka nam slash api slash notes hai  */
app.post('/api/notes',async (req,res)=>{
    const { title, description } = req.body
    
    const note = await  noteModel.create({
        title,description
    })
    
    res.status(201).json({
        message:"note created successfully",
        note
    })
    
    
})


/* ab hm dusri api create krenge jiska method hoga get aur us api ka nam hoga slash api slash notes aur ye api notes data ko mongodb se fetch krega aur use as a response send krega */
app.get("/api/notes", async (req,res)=>{
    const notes =  await noteModel.find()

    res.status(200).json({
         message:"Notes fetched successfully. ",
         notes
    })

})


/* ab hm dusri api create krenge jiska method hoga delete aur us api ka nam hoga slash api slash notes aur ye api notes ke data ko mongodb se delete kr dega with id , jo id hamare pas request.params se aa rhi hogi*/
app.delete("/api/notes/:id",async (req, res)=>{
 const id = req.params.id

 console.log(id)
 /* ab jo id terminal me console hui hai usse hm use krenge */
 await noteModel.findByIdAndDelete(id)


 res.status(200).json({
    message:"Note deleted successfully."
 })
})



/* ab hm yaha pr ek aur api create kr rhe hai jiska method hai fetch jo notes ko delete krne ke kam ayega aur iss api ka nam hoga slash api slash notes aur sath me hm uss notes ki id pass kr rhe honge jis notes ki id hme update krni hai , aur iss notes me hm keval notes ke description ko update kr rhe hai aur jo hamare pas data aa raha hai request.body me wo sirf rhega description  */
app.patch("/api/notes/:id",async (req,res)=>{
    const id = req.params.id 
    const { description } = req.body

    await noteModel.findByIdAndUpdate(id, { description })

    res.status(200).json({
        message:"Note updated successfully."
    })
 })


module.exports = app /* ab iss app variable ko hm yaha se krenge export */