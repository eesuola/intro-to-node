import jwt from 'jsonwebtoken';



export const checkToken = (req, res, next) => {
    const token = req.header('authorization');
    console.log(token);
    next();
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "No token!! Unauthorized",
        });
    }
    const jwtSecret = process.env.JWT_SECRET;
    const extractedToken = token.split(" ")[1];
    const payload = jwt.verify(extractedToken, jwtSecret)
    console.log(payload);

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Invalid token!! Unauthorized",
        });
    }
    next();
    
    
}