
import User from "../../../DB/models/user.model.js"
import bycript from 'bcrypt'
export const signUp = async (req, res) => {
    try {
        const { name, email, password,isLogin} = req.body
        const isEmailExist = await User.findOne({ where: { email } })

        if (isEmailExist) {
            return res.status(400).json({
                message: "Email already exist"
            })

        }
        const hash = bycript.hashSync(password, 10)
        const user = await User.create({ name, email, password: hash,isLogin })
        return res.status(201).json({
            message: "User created successfully",
            user
        })

    } catch (error) {

        console.log("internal server error", error);

    }




}


export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ where:   { email } })
        if (!user) {
            return res.status(400).json({
                message: "User not found"
            })
        }
        const isMatch = bycript.compareSync(password, user.password)
        if (!isMatch) {
            return res.status(400).json({
                message: "Password or email does not match"
            })
        }
        return res.status(200).json({
            message: "User login successfully",
            user    
        })
    } catch (error) {

        console.log("internal server error", error);        

    }   

}


export const logout = async (req, res) => {
    try {
        const{id}=req.query;
        const logoutState = await User.update({isLogin:false},{where:{id}});
    
        return res.status(200).json({
            message: "User logout successfully",
            logoutState
        })

        
    } catch (error) {

        console.log("internal server error", error);
    }
   
}

