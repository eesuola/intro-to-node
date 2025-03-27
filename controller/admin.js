import User from "../model/authentication.js";

export const getUsers = async (req, res) => {
    const allUsers = await User.find()
    
    
    res.status(200).json({
        success: true,
        message: "All users",
        data: allUsers,
    });


}