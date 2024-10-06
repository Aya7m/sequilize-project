
import { Router } from "express";
import { logout, signIn, signUp } from "./user.controller.js";


const userRouter=Router()

userRouter.post('/signup',signUp)
userRouter.post('/signin',signIn)
userRouter.patch('/logout',logout)

export default userRouter