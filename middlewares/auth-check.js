const jwt = require("jsonwebtoken")
require("dotenv").config();

module.exports = (req,res,next)=>{
    try{
        console.log("Authorization headers incoming request");
        const headertoken=req.headers.authorization.split(" ")[1];
        let decoded = jwt.verify(headertoken,process.env.AUTH_STRING);
        req.userData = decoded
        next();

    }catch{
        return res.status(401).json({
            message:"Auth failed"
        })
    }
}