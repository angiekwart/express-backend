const express = require('express');
const bodyParser = require('body-parser');

// create server
const server = express();
server.use(bodyParser.json());

// create database
const bankdb = [];

// create models
function BankModel({name,location, phone, address, accountNumber, balance}){
    const bank = {
        name, 
        location, 
        phone, 
        address,
        accountNumber, 
        balance,

        //method to save bank details to database
        save: function(){
            bankdb.push(this);
            return this;
        }
    };
    return bank;

    
}

// create controllers
const createBankDetails = (req, res) =>{

    // capture information from request body using destructuring
    const {name, location, phone, address, accountNumber, balance} = req.body;
    // create new bank
    const bank = new BankModel({name, location, phone, address, accountNumber, balance});
    //save bank to database
    bank.save();
    res.json({message: "bank details saved successfully", data: bank});
}

const retrieveBankDetails = (req, res) =>{
    res.json({message: "bank details retrieved successfully", data: bankdb});
}


// routes
server.post('/bank', createBankDetails);
server.get('/bank', retrieveBankDetails);

// listen to port
server.listen(5500, "localhost", console.log('server is live on port 5500'));