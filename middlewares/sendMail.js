// import nodemailer from "nodemailer"
import {createTransport} from "nodemailer"









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





