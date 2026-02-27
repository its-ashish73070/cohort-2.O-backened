/* ab ek SCHEMA create krne ke liye hme mongoose ko require krna pdta hai */
const mongoose = require("mongoose")

/* ab SCHEMA hme create krna hai notes ka , to uske liye hm phle noteSchema nam se ek variable create krenge aur iske andr hm likhenge new mongoose.Schema aur iske andr pas hota hai ek object , aur iss object ke andr hm batate hai ki kon kon si properties hogi aur uska type kya hoga , jaise hmare note ke pas ek title hoga aur ek description hoga , title ka type string rhega and description ka type bhi string rhega ==> isi process ko hm bolte hai SCHEMA create krna aur ye jo format hai jis format me hm apne data ko database pr store kr rhe hai ise hm bolte hai SCHEMA*/
const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
}) 
/* Schema is a kind of format ki hm apne database ko bata rhe hote hai ki hm kis format me data ko store krvayenge uss format ko hm bolte hai SCHEMA */
/* lekin database me agr hme CRUD operation perform krne wale hai ki data create krna hai , read krna hai , update krna hai aur delete krna hai, to agr database me kopi sa bhi operation perform krna hai to waha pe jrurt pdti hai model ki  */

/* ab model create krne ke liye hm likhenge mongoose.model aur model me string ke liye abhi mai likh rha hu notes aur uske baju me hm pas krte hai noteSchema */
const noteModel = mongoose.model("notes", noteSchema)   /*ye line ek model ko create kr deti hai aur model create krne ke bad ise hm save kr dete hai noteModel ke andr  */
/* notes ke data ko ek alag collection me rkhenge and uss. collection ka nam hm (notes) rkhenge notes ki jgh hm collection ka nam kya rkhna hai wo hm iss string me rkhte hai*/
/* ek notes nam ka collection hoga jiske andr hme sare notes ka data rkhenge , ye hm 13 wali line me bata rhe hote hai */
/* Schema to hm create krte hai format. batane ke liye pr agr hme kuch bhi operations perform krne hai to hme jrurt pdti hai model ki  */
/* 13 -> iss model ke bina hm ek bhi CRuD operation perform hi nh kr skte hai hmare database pe   */
/* to ab hm iss model ko yaha se krenge export */

module.exports = noteModel
/* export krne ke baad app.js file me ayenge aur yaha pr krenge require */


/* ab hm app.js me jake kuch api create krenge */