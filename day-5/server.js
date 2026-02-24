/* iss file ka main kam hota hai 
      server ko start krna 
  */

 const app = require("./src/app")     /*src folder ke andr hmne kiya app file ko require */

 app.listen(3000,()=>{
    console.log("server is running on port 3000")
 })