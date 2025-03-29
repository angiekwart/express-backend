// setting up the server, import relevant packages
const express = require('express');
const bodyParser = require('body-parser');
// const banksDb = require('./db');        //import the database from the db.js file
// const bankModel = require('./model'); //import the model from the model.js file
const {retrieveBankController, createBankController, updateBankController, deleteBankController} = require('./controllers');



//create a server and a  port
const server = express();
const port = 5000;

//create a middleware to parse the body of the request
server.use(bodyParser.json());



//the routes create the views
server.get("/bank", retrieveBankController);
server.post("/bank", createBankController);
server.put("/bank", updateBankController);
server.delete("/bank", deleteBankController);




//server listen to port
server.listen(port, ()=>(
    console.log(`server is listening on port ${port}`)
))