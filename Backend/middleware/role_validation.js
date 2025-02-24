export const IsMember = async(req,res, next)=>{
    const userRole = req.user.role
    if(userRole == 'member'){
        next()
    }else{
        res.json({
            success: false,
            auth: false,
            message: 'You are not member'
        })
    }
}
export const IsAdmin = async(req,res, next)=>{
    const userRole = req.user.role
    if(userRole == 'admin'){
        next()
    }else{
        res.json({
            success: false,
            auth: false,
            message: 'You are not admin'
        })
    }
}

