const express = require('express');
const router = express.Router();
const path = require('path');
const alumniDetails = require('../../schema/alumniSchema');

router.route('/')
.post(async (req,res) => {
    try{
        const dbData = await alumniDetails.findOne({
            userName: req.body.userName,
            password: req.body.password
        })
        if(dbData)
        res.status(200).sendFile(path.join(__dirname,'..','..','public','frontpage.html'))
        else
        res.status(403).json({msg:'user not found'});
    }
    catch(error){
        res.status(500).json({msg: 'error occures'});
    }
})

module.exports = router;