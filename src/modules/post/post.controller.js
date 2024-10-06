import Post from "../../../DB/models/post.model.js";
import User from "../../../DB/models/user.model.js";

export const createPost = async (req, res) => {

    try {
        const { title, description, UserId } = req.body;
        const user = await User.findOne({ where: { id: UserId, isLogin: true } })
        if (!user) {
            return res.status(400).json({
                message: "User not found or not logged in"
            })
        }
        const post = await Post.create({ title, description, UserId })
        return res.status(201).json({
            message: "Post created successfully",
            post
        })

    } catch (error) {

        console.log("internal server error", error);

    }
}

export const getAllPost = async (req, res) => {
    try {
        const posts = await Post.findAll();
        return res.status(200).json({
            message: "All posts",
            posts
        })
    } catch (error) {
        console.log("internal server error", error);
    }
}

export const getSpecificPost = async (req, res) => {
    try {

        const post = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ["name", "email"]
                    
                }
            ]
        });
        return res.status(200).json({
            message: "All posts",
            post
        })


    } catch (error) {
        console.log("internal server error", error);
    }
}


export const updatePost = async (req, res) => {
    try {
        const { id } = req.query
        const { title, UserId } = req.body
        const post = await Post.update({ title }, { where: { id, UserId } })
        return post > 0 ? res.status(200).json({
            message: "post updated successfully",
            post
        }) : res.status(400).json({
            message: "post not found"
        })

    } catch (error) {
        console.log("internal server error", error);
    }
}


export const deletePost = async (req, res) => {
    try {
        const { id } = req.query
        const { UserId } = req.body
        const post = await Post.destroy({ where: { id, UserId } })
        return post > 0 ? res.status(200).json({
            message: "post deleted successfully",
            post
        }) : res.status(400).json({
            message: "post not found"
        })

    } catch (error) {
        console.log("internal server error", error);
    }
}