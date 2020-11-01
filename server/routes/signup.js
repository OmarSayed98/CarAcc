var express = require("express");
var router = express.Router();

router.post("/",function(req,res,next){

    if(req.headers.referer==='http://localhost:3000/signup')
    {
        res.send("user sent");
        console.log(req.body);
    }

    else{
        res.send("Unauthorized attempt");
    }
    
})

module.exports=router;