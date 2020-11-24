exports.requireSignin=(req,res,next)=>{
    const token=req.headers.authorization.split("")[1];
   
  const user=  jwt.decode(token,process.JWT_SECRET);
  req.user=user;
    next();
}