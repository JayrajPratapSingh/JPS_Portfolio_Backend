import mongoose from "mongoose"
const dbURI = process.env.DATABASE
export const ConnectDatabase = ()=> {mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } ).then((c)=>{
    console.log(`database connected sucessfully: ${c.connection.host}`)
 }).catch((e)=>console.log(e))}