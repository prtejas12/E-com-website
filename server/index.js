const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const app=express()
const cookieParser=require("cookie-parser")
const authRoutes=require("./Routes/AuthRouters")
mongoose.connect("mongodb://localhost:27017/web",{
    useUnifiedTopology:true,
}).then(()=>{
  console.log("db connected");
})
app.listen(4000)
app.use(cors({
  origin:["http://localhost:3000"],
  method:["GET","POST"],
  credentials:true,
})
)
app.use(express.json())
app.use("/",authRoutes)
app.use(cookieParser())
