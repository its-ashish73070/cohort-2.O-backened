/* iss file ke mainly do kam hote hai , pehla kam hota hai server ko start krna aur dusra kam hota hai database se connect krna   */

require('dotenv').config()
/* hm yaha pr require krenge app ko jo hmne export kiya tha app.js file se  joki src folder ke andr app file me hai */
const app = require("./src/app")
const connectToDB = require("./src/config/database") /* hmne jo function banaya tha database.js file me use krenge hm require aur iss function ko require krke hm yaha pr krdenge call */

connectToDB()

/* ab hm yaha pr krenge server ko start with port no. 3000 */
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})