const express = require('express');
const router = express.Router();
const studentDetails = require('../../schema/studentSchema');

router.route('/')
.get(async (req,res) => {
    try{
        const dbData = await studentDetails.findOne({
            userName: req.body.userName,
            password: req.body.password
        })
        if(dbData)
        res.status(200).json(dbData);
        else
        res.status(403).json({msg:'student not found'});
    }
    catch(error){
        res.status(403).json({msg:'failed'});
    }
})

module.exports = router;