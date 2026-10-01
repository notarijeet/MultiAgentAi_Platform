import express from "express"
import dotenv from "dotenv"
dotenv.config();


const app = express();

const PORT = process.env.PORT || 5001;

app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Hello"
    })
})


app.listen(PORT,()=>{
    console.log(`server running on PORT${PORT}`);
})