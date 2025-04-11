import User from "../model/authentication.js";

export const uploadPicture = async (req, res) => { 
    try {
        // console.log(req.body);
        // console.log(req.files);
        console.log(req.file);
        

        res.status(200).json({
            success: true,
            message: "Image uploaded successfully",
        });
        
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
        
    }
}