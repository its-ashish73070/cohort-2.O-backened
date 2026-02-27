/* iss file ka mainly ek hi kam hota hai server ko create krna  */


const express = require('express')

/* ab hmne jo model export kiya tha use yaha pr krenge require */
const noteModel = require("./config/models/notes.model")


/* ab jaise hi hm express ko call krenge hmara server create ho jayega */
const app = express();

/* jb tk hm app.use(express.json()) na klikh de tb tk request.body ke andr data aa hi. nh skta hai */
app.use(express.json())



/* ab hm ek api create krenge jiska method hoga post aur api ka nam rhega slash notes aur jo hamari request.body h iske andr data aa rha hoga title aur description,is data ke sath hme notes create krna h pr abki bar data store hona chahiye database(mtlb mumbai bcz cluster mumbai me create kiya tha to haamra database mumbai me hai) ke andr */
app.post("/notes",async (req,res)=>{
    const {title,description,age} = req.body /* jo hmare pas data ane wala h use krenge destructure , title aur description jo hamare pas ayenge reuest.body se  */

    /* hm model ko line 7 me require krne ke bad ek method create krenge noteModel.create -> ye ek note ko create krti hai aur data store krti hai hmare mumbai wale cluster pe  */
    const note = await noteModel.create({
        title, description,age
    })
    /* hota ye hai ki jo noteModel.create hai ye ek note ko create krti hai aur ye data store krti hai hamare mumbai wale cluster pe , problem ye hai jo hamara server hai wo hamare local machine pr chl raha hai aur hm baithe hai pune me to ab pune se data jayega mumbai pe aur ye internet ke through jayega aur fir mujhe uska ek response milega ki apka data save ho chuka hai , ab isme kitna time lgega nh pata kyuki ye internet ke speed ke upar depend krta hai aur quality pe depend krta hai ,
    to isiliye hm yaha pe use krte hai await aur await use krne ke liye hme line 19 me use  krna pdta async , ab jo note create hota hai use hm save krte hai ek note constant ke andr , aur response me use krenge status code 201 aur json format me hm use kr rhe hongge msg aur message me likh rhe honge note created successfully aur iske andr note ka bhi data share kr skte hai */

    res.status(201).json({
        message:"Note created Successfully",
        note
    })

})/* pr abhi request.body ke andr data nh ayega jb tk hm middleware use nh krenge  */


/* line 19 se line 34 tk ka summary --> ab agr hm iss puri api ko smjhe to request.body ke andr data ayega title aur description aur isko hmne kiya destructure , title aur description nikala hmne request.body se uske bad hmne ek notes create kiya aur note ka data save hoga hamare mumbai wale server pe ab kyuki waha pe save hoga to data jo mere local pe chl rha hai usse nikl kr wo jayega mumbai wale server pe fir wo waha pe save hoga fir uska mujhe milega ek acknowledgement ki apka data save ho chuka hai iss puri chij ko krne me kitna time lgne wala hai iska pta hme nh hota hai isiliye hm use krte hai await aur await use krne ke liye hme use krna pdta hai async ka ab jo bhi note create hoga title aur description ke sath use hm save krenge note ke andr aur finally response.status 201 joki ek naya resource create ho raha hai ye hm yaha pr bhejenge aur json format me message aur note ye dono chij  hm yaha pr share kr rhe honge ,ab hm ate hai postman ke andr   */




/* ab jo hmne server create kiya hai ise krenge hm export */
module.exports = app



/* in compass jo id create hoti hai wo database create krta hai/ ya fir jo mongoose package hai wo create krke deta hai , aur jo hmara database hai wo hr notes ko ek unique id deta hai , dhyan rkhna kbhi bhi do notes ki id same ho hi nh skti  */