import User from "../model/authentication.js";

//Register a new user

export const registration = async (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    await user.save();
    // console.log(user);
    
    
}