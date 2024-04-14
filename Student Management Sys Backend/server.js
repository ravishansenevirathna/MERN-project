const express = require("express");
const app = express();
const cors = require('cors');

const port = 8070;
const host = '127.0.0.1';
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://trrsenevirathna2001:2001@myclusterforstu.ghfrsxj.mongodb.net/?retryWrites=true&w=majority&appName=MyClusterForStu'

const connect = async () =>{
    try{
        await mongoose.connect(uri);
        console.log('Connected to mongodb')
    }
    catch(error){
        console.log('mongodb error is :', error);

    }
};

connect();


const server = app.listen(port,host,() => {
    console.log(`node server is listening to ${server.address().port}`)
})