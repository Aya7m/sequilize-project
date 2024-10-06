import { Router } from "express";
import { createPost, deletePost, getAllPost, getSpecificPost, updatePost } from "./post.controller.js";

const postRouter=Router()

postRouter.post('/create',createPost)
postRouter.get('/all',getAllPost)
postRouter.put('/update',updatePost)
postRouter.delete('/delete',deletePost)
postRouter.get('/specific',getSpecificPost)

export default postRouter