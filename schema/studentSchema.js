const mongoose = require('mongoose');

const student_schema = mongoose.Schema({
    userId: {type: String, required: true},
    userName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    mobileNumber: {type: Number, required: true},
    dob: Date,
    college: String,
    department: String,
    passedOutYear: Number,
    bio: String,
    //intenship:
    //work:
    //profilePicture:
    //post: [postId1, postId2]
    //friends: [userid1, userid2]
})

module.exports = mongoose.model('studentDetails',student_schema);