const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const PORT = 4000;

app.use(express.static(path.join(__dirname,'public')))

main().catch(err => console.log(err));

app.use('/alumni/addAlumni',require('./datas/alumni/addAlumniScript.js'));
app.use('/alumni/accessAlumni',require('./datas/alumni/accessAlumniScript.js'));
app.use('/alumni/sendDetais',require('./datas/alumni/sendAlumniDetails.js'));

app.use('/student/addStudent',require('./datas/student/addStudentScript.js'));
app.use('/student/accessStudent',require('./datas/student/accessStudentScript.js'));
app.use('/student/sendDetais',require('./datas/student/sendAlumniDetails.js'));

app.use('/',require('./route/root'));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/AlumniAssociation');
}

app.listen(PORT,()=>console.log(`Port running on ${PORT}`));