import express from "express"
import { addProject, addTimeline, addYoutube, contact, deleteProject, deleteTimeline, deleteYoutube, getUser, login, logout, myProfile,updateUser } from "../controller/User.js"
import { isAuthenticated } from "../middlewares/auth.js";
import cors from "cors"
export const userRouter = express.Router()

userRouter.route("/login").post(cors(), login);
userRouter.route("/logout").get(cors(), logout);
userRouter.route("/user").get(cors(),getUser);
userRouter.route("/me").get(isAuthenticated,cors(), myProfile);

userRouter.route("/admin/update").put(isAuthenticated,cors(), updateUser)

userRouter.route("/admin/timeline/add").post(isAuthenticated,cors(), addTimeline)
userRouter.route("/admin/youtube/add").post(isAuthenticated,cors(), addYoutube)
userRouter.route("/admin/project/add").post(isAuthenticated,cors(), addProject)

userRouter.route("/admin/timeline/:id").delete(isAuthenticated,cors(), deleteTimeline)
userRouter.route("/admin/youtube/:id").delete(isAuthenticated,cors(), deleteYoutube )
userRouter.route("/admin/project/:id").delete(isAuthenticated,cors(), deleteProject )

userRouter.route("/contact").post(contact);









