const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 4000;

main().catch(err => console.log(err));

//app.use('/newAlumni',require('./datas/addAlumniScript.js'))
app.use('/',require('./route/root'))

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/AlumniAssociation');
}

app.listen(PORT,()=>console.log(`Port running on ${PORT}`));