module.exports= reqFilter=(req, res, next)=>{
    if(!req.query.age){
        res.send("Enter Age")
    }
    else if(req.query.age<18){
        res.send("Not Allowed")
    }
    else{
        next()
    }
}

