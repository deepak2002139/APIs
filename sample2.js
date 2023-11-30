import express from "express"
import bodyParser from "body-parser";
import axios from "axios";

const app=express();
const port=3000;
//  built  in middle ware which allow the satatic files of the front-end
app.use(express.static("public"));
// when the user goes to the the home page it should render the index.ejs file.
app.get("/",async (req,res)=>
{
    // we have to return something here that what we are doing here...
    try
    {
        const result=await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index.ejs",{
        secret:result.data.secret,
        user:resilt.data.username
    });
    }
    catch(error)
    {
        console.log(error.response.data);
        res.status(500);
    }
});


app.listen(port ,()=>{
    console.log(`Server started onport ${port}`);
});