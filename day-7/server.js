/* iss file ka mainly do kam hota hai 
pehla server ko start krna aur dusra kam database se server ko connect krna  */

require("dotenv").config()

const mongoose = require("mongoose")  /*ab hmne package ko install krne ke bad mongoose ko kr liya require , ab require krne ke bad hm ek function create krenge , ab function ka nam rkhenge connectToDb and iske andr hm likhenge code ki kaise hamara database server se connect kiya jayega  */

/* ab jo hmne database code likha hai server se connect krne ke liye database.js file se use waha se export kr diya hai pr ab hme yaha pr use require krna pdega */
const connectToDb = require("./src/config/database")
/* ab jo hmne server create kiya tha and export kiya tha app.js se use hm krenge require */
const app = require("./src/app")


// function connectToDb(){
    // mongoose.connect("mongodb+srv://Ashish:K4WnNnojSH95816G@cluster0.b2gtopx.mongodb.net/day-7")/* server se database ko connect krne ke liye hamare poas ek method ati hai mongoose.connect and iske andr hm likhenge uri, aur ye whi uri hai jisse hm apne cluster se connect krte hai, aur ye uri hamare compass pr pdi hui hai  */
                      /* ye whi uri h jo hamare cluster se jo hmare cluster se connect krti hai , lekin hm hamare server ko cluster se connect nh krwate h , hm use database se connect krwate hai , ye uri h keval hmare cluster tk ki but hme connect krwana h databse se , aur database hote h cluster ke andr , to hme database se connect krwane ke liye slash/ ke bad apne database ka nam likhna hoga , agr hmare database uss nam se nhi bhi h to wo automatically create ho jayega aur connect ho jayega   */
                      /* ab jo hmne slash ke bad day-7 likha hai wo hamre database ka nam hai ab ye usse connect hoega  */
    /* ab jb bhi mongoose.connect method hmare datbase connect ko connect kr de  to ye then method wala function chala dena */
    // .then(()=>{
    //     console.log("Connected to DB")
    // })                
    //                 }

/* ab ye pura code ek function connectToDB ke andr likha gya hai to iss code ko chalane ke liye hme function ko krna hoga call */
connectToDb();        
/* ab hm jb apne server ko call krenge to wo to chlega hi sath hi sath database se bhi connect ho jayega */






/* ab hm krenge server ko start  */
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})
/* ab hmne ye upar likh ke server to start kr diya pr abhi ye database se nh connect hua hai to ab hm use connect krenge  */
/* ab database se connect krne ke liye hme ek package aur install krna pdta hai ,iss package ka kam rhta hai jo hmne express ka server create kiya hai ye use server aur database ko connect krne ke kam ata hai , iske liye hm package install/use krenge mongoose */
/* npm i mongoose */
/* ab hmne package install kr liya to ise require bhi krna pdega , ise hm require kr rhe hai upar ki line me   */





/* ab hm ek simple sa task complete krenge ki hme ek notes create krna hai jisme notes aur description hoenge jaise pichli bar notes create kiya tha bs iss bar alg ye hoga hm storage ke liye database ka use krenge  */
/* database ka ek simple sa rule hai , ki database bolta hai ki mai apke liye data store kr lunga lekin apko mujhe phle batana pdega ki aap kaise data store krne wale ho (like kis format me data store krne wale ho ye hme phle batana pdta hai hmare database ko => isi process ko hm bolte hai SCHEMA create krna) */
/* ab SCHEMA create krne ke liye ek alg folder create kiya jata hai and folder ka nam rkhte hai models aur ye folder hm src folder ke andr banate hai aur models folder ke andr hm ek file banate hai notes.models.js nam se */