import jwt from "jsonwebtoken"


export const userAuth=async(req,res,next)=>{
    const {token}=req.headers
    if(!token){
        return res.json({success:false,message:"Not Authorised. Login Again"})

    }
    try{
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET);
        if(tokendecode.id){
            req.body.userId=tokendecode.id
        }else{
            return res.json({success:false,message:"Not Authorised. Login Again"})

        }
        next();
    }catch(error){
        res.json({success:false,message:error.message})
        
    }

}




