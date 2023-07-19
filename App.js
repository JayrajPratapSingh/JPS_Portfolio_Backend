import express from "express"
import cookieParser from "cookie-parser"
export const app = express()
import cors from "cors"
app.use("*",cors({
    origin:true,
    credentials:true,
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({extended:true, limit:"50mb"}))
app.use(cookieParser());




import { userRouter } from "./routes/User.js"


app.use("/api/v1", userRouter);

// app.use(express.static(path.resolve("../fronend/build")))

// app.get("*", (req,res)=>{
//     res.sendFile(path.resolve("../frontend/build/index.html"))
// }) 