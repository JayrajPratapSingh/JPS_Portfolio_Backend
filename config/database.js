import mongoose from "mongoose"
export const ConnectDatabase = ()=> {mongoose.connect(process.env.DATABASE, {useNewUrlParser:true, useUnifiedTopology:true}).then((c)=>{
    console.log(`database connected sucessfully: ${c.connection.host}`)
 }).catch((e)=>console.log(e))}