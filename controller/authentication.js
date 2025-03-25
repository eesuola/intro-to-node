import User from "../model/authentication.js";

//Register a new user

export const registration = async (req, res) => {
    try {


        const existingUser = await User.findOne
        ({ email: req.body.email });
        if (existingUser) {
            throw new Error("User already exists");
        }
        
        // console.log(req.body);
        if (!req.body.firstName || !req.body.email || !req.body.password) {
            throw new Error ("First Name not provided");
        }
        const user = new User(req.body);
        await user.save();
    
    
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: user,
        })
        // console.log(user);
        
    } catch (error) {
        console.error(error.message);
        res.status(400).json({
            success: false,
            message: error.message,
        });
        //console.log(error);
        
    }
    
}