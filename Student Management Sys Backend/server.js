const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
require('dotenv').config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

const connect = async () =>{
    try{
        await mongoose.connect(URL);
        console.log('Connected to mongodb')
    }
    catch(error){
        console.log('mongodb error is :', error);

    }
};

connect();




const server = app.listen(PORT, () => {
    console.log(`node server is listening to port number :  ${PORT}`)
})


const studentRouter = require('./routes/StudentsRoutes');

app.use("/student",studentRouter);