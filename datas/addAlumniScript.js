const express = require('express');
const router = express.Router();
const alumniDetails = require('../schema/alumniSchema');
var a=0;

router.route('/')
.post(async (req,res) => {
    a++;
    try{
        await addAlumni(req.body);
        res.status(200).json({msg: 'Alumni successfully added'});
    }
    catch(error){
        res.status(500).json({msg: 'error occures'});
    }
})


async function addAlumni(data) {
    await alumniDetails.create({
        userId: `ALU${a.toString().padStarts(5,'0')}`,
        userName: data.userName,
        email: data.email,
        password: data.password,
        mobileNumber: data.mobileNumber
    })
}