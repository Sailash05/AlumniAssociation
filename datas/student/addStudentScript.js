const express = require('express');
const router = express.Router();
const studentDetails = require('../../schema/studentSchema.js');

var a=0;
router.route('/')
.post(async (req,res) => {
    a++;
    try{
        await addStudent(req.body);
        res.status(200).json({msg: 'student added successfully'});
    }
    catch(error){
        res.status(500).json({msg: 'Failed to add'});
    }
})

async function addStudent(data) {
    await studentDetails.create({
        userId: `ALU${a.toString().padStarts(5,'0')}`,
        userName: data.userName,
        email: data.email,
        password: data.password,
        mobileNumber: data.mobileNumber
    })
}

module.exports = router;