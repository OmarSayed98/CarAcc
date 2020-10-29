var express = require("express");
var router = express.Router();

router.get("/",function(req,res,next){

    if(req.headers.referer==='http://localhost:3000/home')
    {
        res.send("test passed");
        
    }

    else{
        res.send("Unauthorized attempt");
    }
    
})

module.exports=router;