/* server.js file ke bhi do kam hote hai
pehla kam iska hai server ko start krna 
dusra kam iska hai database se connect krna */


const app = require('./src/app');
const mongoose = require("mongoose")  /* ab hmne mongoose package ko install kiya tha ab use krenge hm require , usse require krne ke bad hm yaha pe ek function create krte hai and function ka nam hm dete hai connectToDb aur function ke andr hm code likhte hai ki kaise hm database ko connect krenge */

function connectToDb(){                                                                  /*(jis database se connect krna hai uska nam likhenge ) niche hmne slash ke bad jo day-6 likhe hai ye database h hamara day-6 nam se  */
    mongoose.connect("yaha pr uri link dalo/day-6")  /* bracket ke andr hm likhte hai uri , ye uri rhata hai hmare database ka , mongodb compass pe jo connection banaye h waha se ye uri mil jayega */
    /* ye jo hamara method hai ye method hamare express server ko connect krti hai mongodb database se aur iska ek kam ye bhi hota hai agr ise day-6 nam ka koi bhi database nh mila to ye use bhi create krti hai   */
    /* ye uri jo hmne paste kiya ye uri mongodb compass ko connect kr rhi thi hamare cluster se, lekin hamara server cluster se connect nh hoga wo connect hoga database se , lekin database to hote hai cluster ke andr , hmare pas aisi uri hai jo already cluster se connected hoti hai ab uske andr koisa database hai jisse hmko connect krna hai  */
    /* yad rkhna glti se kbhi bhi ye uri github pr mt dalna production level pe , databse compromise ho jata hai */
    /* ab jo hamara cluster hai wo mumbai me present hai lekin mai abhi baitha hua pune me to jo mera server hai hai wo hmare local system pr chl raha hai , to mera local system connect krega database se jo baitha hua hai mumbai me aur ye connect kiya jayega internet ke through , ab kitni der me connect hoga iska idea hme bilkul bhi nh hai to hm yaha pr bolte hai mongoose.connect aap server aur database ko connect krna aur jb bhi aap connect ho jaoge tb then ke andr jo callback hai aap ise chala dena  */
    .then(()=>{
        console.log("Connected to database ")
    })
    /* ab jaise hi hamara server connect ho jayega database se tb hmara ye callback chlega then ke andr aur ye pura code likha hua hai ek function ke andr aur jb bhi mai iss function ko call krunga tb ye pura code execute hoega */
}

connectToDb(); /* ab hmne function ko call krdiya , ab jaise hi server hm start krenge */








app.listen(3000,()=>{
    console.log("server is running on port 3000")
})


/* ab yaha se suru hota hai ki kaise hm server aur database ko kaise connect krte hai ,hamara database h mumbai ke ek database server pe yad h na hmne cluster create kiya tha mumbai ke database server pe */
/* ab connect krne ke liye hme ek package ki jrurt pdti h package ka naam hai mongoose , hme terminal me command run krna hoga ( npm i mongoose ) */
/* iss package ki help se hm hamare server (jo express ki help se create kiya hai ) use connect krte hai hmare mongodb database se  */