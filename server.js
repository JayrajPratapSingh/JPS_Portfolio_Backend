import {app} from "./App.js"
import dotenv from "dotenv"
import cloudinary from "cloudinary"
dotenv.config({path:"./config/config.env"})
const PORT = process.env.PORT || 4000
import { ConnectDatabase } from "./config/database.js";
ConnectDatabase()
cloudinary.v2.config({
    cloud_name:process.env.CLOUDNARY_CLOUD_NAME,
    api_key:process.env.CLOUDNARY_API_KEY,
    api_secret:process.env.CLOUDNARY_API_SECRET
})

app.listen(PORT, ()=>{
    console.log(`server is running at port: ${PORT}`)
});
