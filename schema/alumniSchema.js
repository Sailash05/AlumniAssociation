const mongoose = require('mongoose');

const alumni_schema = mongoose.Schema({
    userId: {String, required: true},
    userName: {String, required: true},
    email: {String, required: true},
    password: {String, required: true},
    mobileNumber: {Number, required: true},
    dob: Date,
    college: String,
    department: String,
    passedOutYear: Number,
    bio: String,
    //intenship:
    //work:
    //profilePicture:
    //post:
    //friends: [userid1, userid2]
})