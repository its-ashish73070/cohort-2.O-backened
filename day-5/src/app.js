/* app.js file 
server ko create krna
server ko config krna 
 */

const express = require('express')
const app = express()         /* for creating a server we call a server  */


app.use(express.json())  /* jb tk hm express.json() use nh krte hai tb tk hmara express ka server request.body ke andr ka data pdh hi nh skta  */

/* Ab hm kuch api create krenge mtlb hm kuch notes create krenge , api ka mtlb hm notes create ho jaye ,aur jitne notes create ho rhe hai unhe hm dekh ske ,unhe hm delete kr ske , un notes ko hm update kr ske , ye char api hme create krni hai  */

/* ab jisme se jo sbse phle api ka nam ata hai jis api ka use krte hue hm note ko create krenge but unhe hme khi na khi store krna hoga to hm store krne ke liye ek notes nam, ka array create krenge jo ki suruwat me empty rhega aur hare iss array me rhenge objects ,jisme hr ek object ek note ko define/justify kr rha hoga , hr note ke pas do property hongi ek title aur ek description */
const notes = []     /* jitne bhi variables hote hai like notes ye apne value RAM ke andr store krte hai , jo haamre system me present hai */

/* hm jitni bhi api create krenge un sbhi ka response hmesa json format me jayega */


/* ab jo hamari api hogi jb bhi user iss api ko hit krega frontened se to ek note create hoga, to note create krne ke liye hm method use krte hai POST method , to hm POST method ke sath api create krenge  */
app.post("/notes",(req,res)=>{

    console.log(req.body)

    notes.push(req.body)  /* ab jo ye data aa rha hai request.body se ise hm notes ke andr push krenge ya rkhenge aur ab yhi se hme status code pdhna chalu krna hai */

    res.status(201).json({    /* frontened se jo data request.body me aya us data ke sath ek notes create kiya aur fir response send kiya jiska status code tha 201 aur json format me data bheja ki note created successfully */
        message:"Note created Succesfully"
    })
        /* status code hm isliye use krte hai ki agr client ne agr koi request ki hai aur us request ka outcome kya hai kya wo request shi gyi thi , us request me koi problem to nh hui thi na , to jo bhi outcome hua client ke request ka uske according use indicate krne ke liye hm status code bhejte hai */
    /* like status code 201 hm tb use krte hai jb server side pe ek naya resource create kiya ho tb hm status code 201 ka use krte hai */

})
/* jb bhi iss route/api pe request ayegi to request.body ke andr jo bhi data rhega wo yaha pr console ho jayega  
ab hm postman ki help se hm hamre server pr ek request bhejenge jiski method post hai aur hamare api ka nam hai slash notes ab iss slash notes ki api pr request ayegi jo hmne upar 18 line me likh rkha hai aur request.body me jo bhi data rhega jo ki postman pr hai wo yaha pr console ho jayega , to jb hm postman se data bhejenge to yahaa terminal me undefined show hoega bcz ye read nh kr paa rha hai , ye read kr paye uske liye hme use krna hoga middleware --> express.json */




/* ab hm ek api aur creaate krenge iss api ka kam rhega ki jitne bhi notes server pr create hue h un sare ko hm wapas se client server pr bhej ske , to server se data jayega hmare client side pe , to jb data server side se client side pr jaa rha hota hai , to hm waha pr GET method ka use krte hai   */
/* ab hm yaha pr aisi api create krenge jiss api ka  nam rhega slash notes , jb user iss api pr request krega to jitne bhi hmare pas yani server ke pas notes hai wo user ke paas chala jayega  */
app.get("/notes",(req,res)=>{
    res.status(200).json({     /* dhyan rkhna jo bhi hm api create krenge us api ka response hmesa json format me jana chahiye with status code , json format ke alawa response aur kisi format me nh jayega , aur json formaty me hm notes as it is share kr denge  */
    notes: notes
    }) /* hmne status code 200 isliye use kiya kyuki jo hmara kam tha wo complete ho chuka hai , the request was succesful  */

    })  
    
    



/* ab hm yaha pr ek aur api create krenge jo notes ko delete kre , note ko delete krne ke liye hm method use krte hai DELETE aur api ka nam rhega slash notes aur jis notes ko hme delete krna hai uska index hm likhenge  */
app.delete("/notes/:mama",(req,res)=>{    /* yaha pr jruri nh hai ki hmesa index hi likho yaha pr mama , mami kuch bhi likh skte ho */
  delete notes[req.params.mama]           /* jo bhi hamare pas notes ane wala hai us notes ko hm krenge delete usme se hm request.params.mama ko krenge deleteaur uske bad status code 204 use krenge aur json format me hamara ek message jayega */

  res.status(204).json({
    message : "Note Deleted Successfully."
  })

})


/* Ab hm last ek api aur create krenge jiska kam hoga notes ka description keval update krna , title nhi, aur uske liye hm method use krenge PATCH , agr hm dono update kr rhe hote to waha pr use hoga PUT method ka , aur jis bhi notes ko update krna hoga uska index likhenge  */
app.patch("/notes/:index",(req,res)=>{
  notes[req.params.index].description = req.body.description      /* notes ke andr request.params.index ko krenge select jiske andr jo description ane wala hai ise hm krenege update and finally response.status code jayega 200 aur uske bad hm json format me data bhej denge */

  res.status(200).json({
    message : "Note Updated Successfully."
  })

})


/* 1:0:0 se sayad se start h ye  */
/* Ab hmne postman me jake dekha ki jo hamari charo api h wo dhang se kam kr rhi hai but the problem is that jo hmne server create kiya hai jaha pe hm notes ko create kr skte hai , dekh skte hai , delete kr skte hai , update kr skte hai but isme ek problem yh hai ki agr hmne server ko restart kiya to hmne jitne bhi purane notes hmne/client create kiye the wo sb delete ho jayenge , server ko restart krne ke liye terminal me rs likhte hai  */
/* Problem yhi hai ki jb bhi hm server ko restart krenge to  hmara sara data chala jayega / delete ho jayega */
/* jb. bhi hmara server restart hota hai to ye guarantee bilkul nh hoti ki RAM me whi area wapas se mile jaha pr hmara notes phle store tha , server restart hone ke bad hmara OS us RAM me dusra area deta hai notes ko store krne ke liye  */
/* to jo ye problem h ki server restart hone pr hmara pura data chala jata hai , isi problem ko solve krta hai DATABASE */
/* DATABASE kya krte hai , ye hmse data lete hai aur apne paas data sambhal ke rkhte hai aur jb bhi hmare server ko need pdti hai to wo us data ko wapas se server ko de dete hai */
/* ab isme hmara server kitni bar bhi restart ho jaye , lekin jo hamara data hai wo data base ke pas store rhta hai  */
/* data base hm yaha pe use krte hai data ko store krne ke liye  */
/* ab database bhut type ke ate hai jisme se do hota hai ek SQL and dusra NOSQL , hme yaha pr padhna hai NOSQL database jisme hamare pas option hai MONGODB ka  , ab iss pure course me hme pura MONGODB padhna hai  */
/* ab hm google pe jake mongodb atlas pr login krenge  */
/* ab hm cluster(physical memory kitni hai ya usme processor kon kon se lge hai inhe bolte hai cluster , ys fir cluster define krta hai ki hmare database ki storage kitni hogi aur database me kitna achha processor laga hai like wo database kitna load handle kr skta hai, to cluster hamara combination hota hai storage + processor ka ) create krna chalu krenge , jisme ata hai credential , jiska mtlb hota hai like hm data base create krne wale hai data ko store krne ke liye usme hm users bhi create krte hai jo data base me kuch bhi kr skta hai  */
/* Atlas hamara cloud platform hai aur compass hmari ek application hai , jo hamara database hai wo cloud pr hai , hmara sara ka sara data store hoga database ke andr aur hmara database h cloud pe , ab compass ka role hota hai ki jo bhi data hamare database me store hone wala hai us data ko dekhne ke kam me ayega ye kam hai compass ka   */
/* To hmne abhi tk ek data base create kiya , aur ye database create hua hai cloud pe aur us database se hm abhi connect kr chuke hai , kya server ko connect kiya hai database ko to iska answer hai nh , jo hmari mongodb compass application hai us application ko hmne jo database create kiya hai cloud pe us database se abhi mongodb compass application ko connect kiya hai , server ko connect nh kiya hai hmne iss chij ka dhyan rkhna */



module.exports = app          /* hmne iss file se server ko kiya export  */
