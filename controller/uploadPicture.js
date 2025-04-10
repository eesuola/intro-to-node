import User from "../model/authentication.js";


export const uploadPicture = async (req, res) => { 
    try {
        //console.log(req);

        res.status(200).json({
            success: true,
            message: "Image uploaded successfully",
        });
        
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
        
    }
}