const express = require('express');
const router = express.Router();
const alumniDetails = require('../schema/alumniSchema');

router.route('/')
.post(async (req,res) => {
    try{
        const dbData = await alumniDetails.findOne({
            userName: req.body.userName,
            password: req.body.password
        })
        if(dbData)
        res.status(200).json({msg: ''});
    }
    catch(error){
        res.status(500).json({msg: 'error occures'});
    }
})

