const express = require('express');
const router = express.Router();
const alumniDetails = require('../../schema/alumniSchema.js');

router.route('/')
.get(async (req,res) => {
    try{
        const dbData = await alumniDetails.findOne({
            userName: req.body.userName,
            password: req.body.password
        })
        if(dbData)
        res.status(200).json(dbData);
        else
        res.status(403).json({msg:'user not found'});
    }
    catch(error){
        res.status(403).json({msg:'failed'});
    }
})

module.exports = router;