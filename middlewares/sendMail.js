// import nodemailer from "nodemailer"
import {createTransport} from "nodemailer"



//method 1 not working

// export const sendMail = async (text) => {
//   const transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     auth: {
//       user: "hailie60@ethereal.email",
//       pass: "JEbcrhGNnfErNjSXJd",
//     },
//     tls:{
//       rejectUnauthorized:false
//   },
//     secure:false
//   });

//   await transporter.sendMail({
//     from: '"CONTACT REQUEST 👩‍💻"<jairajportfolio@gmail.com>',
//     to: process.env.MY_MAIL,
//     subject: "CONTACT REQUEST FROM PORTFOLIO",
//     text,
//   });
//   console.log("message sent sucessfully")
// };

// method 2 -not working

// const oAuth2Client= new google.auth.OAuth2(process.env.CLINT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI)
// oAuth2Client.setCredentials({referesh_token:process.env.REFRESH_TOKEN})

// export const sendMail = async(text) =>{
//   const accessToken = await oAuth2Client.getAccessToken();
//     const transporter = createTransport({
//         host: process.env.SMTP_HOST,
//   port: process.env.SMTP_PORT,
//   auth: {
//     type:"OAuth2",
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASSWORD,
//     clientId: process.env.CLIENT_ID,
//     clientSecret:process.env.CLIENT_SECRET,
//     refreshToken:process.env.REFRESH_TOKEN,
//     accessToken:accessToken
//   },
  
//     })

//     await transporter.sendMail({
//         subject:"CONTACT REQUEST FROM PORTFOLIO", to:process.env.MY_MAIL, from:process.env.MY_MAIL, text
//     })
// }


//method 3 

// const OAuth2 = google.auth.OAuth2
// const OAuth2Client = new OAuth2(
//   process.env.CLINT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI
// )

//   OAuth2Client.setCredentials({referesh_token:process.env.REFRESH_TOKEN})
//   export const sendMail = async(text) =>{
//     const accessToken = new Promise((resolve,reject)=>{
//       OAuth2Client.getAccessToken((err,token)=>{
//         if(err){
//           reject(err)
//         }
//         resolve(token)
//       })
//     })


//     const transporter = nodemailer.createTransport({
//       service:"gmail",
//       host:"smpt.gmail.com",
//       port:587,
//       secure:false,
//       auth:{
//         type:"OAuth2",
//         user:process.env.MY_MAIL,
//         clientId:process.env.CLIENT_ID,
//         accessToken,
//         clientSecret:process.env.CLIENT_SECRET,
//         refreshToken:process.env.REFRESH_TOKEN 
//       }
  
//     })
//         await transporter.sendMail({
//             subject:"CONTACT REQUEST FROM PORTFOLIO", to:process.env.MY_MAIL, from:"Nodemailer OAuth2", text
//         })
//     }

// method4

// const oAuth2Client= new google.auth.OAuth2(process.env.CLINT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI)
// oAuth2Client.setCredentials({referesh_token:process.env.REFRESH_TOKEN})

// export const sendMail = async(text) =>{
//     const accessToken = await oAuth2Client.getAccessToken();
//     const transporter = nodemailer.createTransport({
//      service:"gmail",
// auth: {
//   type:"OAuth2",
//   user: process.env.MY_MAIL, 
//   clientId: process.env.CLIENT_ID,
//   clientSecret:process.env.CLIENT_SECRET,
//   refreshToken:process.env.REFRESH_TOKEN,
//   accessToken
// },

//   })
//   await transporter.sendMail({
//     subject:"CONTACT REQUEST FROM PORTFOLIO", to:process.env.MY_MAIL, from:process.env.MY_MAIL, text
// })
// console.log(text)
// }


// method 5

// export const sendMail = async (text) => {
//     const transporter = nodemailer.createTransport({
//      service:"gmail",
//       auth: {
//         user: "jairaj273310@gmail.com",
//         pass: process.env.GOOGLE_PASS,
//       },
//       port:465,
//       host: "smtp.gmail.com"
//     });
  
//     await transporter.sendMail({
//       from: '"CONTACT REQUEST 👩‍💻"<jairajportfolio@gmail.com>',
//       to: process.env.MY_MAIL,
//       subject: "CONTACT REQUEST FROM PORTFOLIO",
//       text,
//     });
//     console.log("message sent sucessfully")
//   };


// method 6

export const sendMail = async (name,email,message) => {
  const transporter = createTransport({
   service:"gmail",
    auth: {
      user: process.env.MY_MAIL,
      pass: process.env.GOOGLE_PASS,
    },
  })
  await transporter.sendMail({
    subject: "CONTACT REQUEST FROM PORTFOLIO",
    from: email,
    to: process.env.MY_MAIL,
    text:`Hey, I am: ${name}, My email is: ${email}, My message is: ${message}`,
  }, )

};



//By Mailtrap

// export const sendMail = async (text) => {
//   const transporter = createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASSWORD,
//     },
//   });

//   await transporter.sendMail({
//     subject: "CONTACT REQUEST FROM PORTFOLIO",
//     to: process.env.MY_MAIL,
//     from: process.env.MY_MAIL,
//     text,
//   },(err,info)=>{
//     if(err){
//       return err
//     }
//     else{
//       return info
//     }
//   });
// };


