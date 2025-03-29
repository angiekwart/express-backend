// setting up the server, import relevant packages
const express = require('express');
const bodyParser = require('body-parser');


//create a server and a  port
const server = express();
const port = 4000;

//create a middleware to parse the body of the request
server.use(bodyParser.json());


//create an empty database.
let banksDb = [];


//create functions/ classes for bank model from the post method.
class bankModel {
    constructor({name,location,branch,phone,address,accountnumber}) {
      this.name = name;
      this.location = location;
      this.branch = branch;
      this.phone = phone;
      this.address = address;
      this.accountnumber = accountnumber;
    }
    save(){
        banksDb.push(this);
        return this;
    }
    static all(){
        return banksDb;
    }

    static update(updateInfo = {}) {
    banksDb = banksDb.map(bank =>{
        if (bank.name === updateInfo.name) {
            return { ...bank, ...updateInfo };
        }
        return bank;
    });
    }
    static delete({name}) {
    let deletedBank = null;
    banksDb = banksDb.filter(bank => {
        if(bank.name !== name){
            return true;
        }
        deletedBank = bank;
            return false;
        });
    return deletedBank;
    }

}


//handlers/ controllers 3.
const createBankController = (req, res) =>{
    //create a bank from the post method
    const {name,location,branch,phone,address,accountnumber} = req.body; //get these details as request body
    //create a new bank
    const bank = new bankModel({name,location,branch,phone,address,accountnumber});
    //save bank details
    bank.save();
    res.json({message:"message created successfully",data:bank}); //respond to client with the bank'client details in json format
}
const retrieveBankController = (req, res) => {
    //list all banks
    const banks = bankModel.all();
    res.json({data: banks});
}
const updateBankController = (req, res) => {
    //update a bank
    const {name,location,branch,phone,address,accountnumber} = req.body; //get these details as request body
    const updatedBank = bankModel.update({name,location,branch,phone,address,accountnumber});
    res.json({message:"message updated successfully", data:updatedBank});
}
const deleteBankController = (req, res) => {
    //delete a bank
    const {name} = req.body; //get these details as request body
    const deletedBank = bankModel.delete({name});
    res.json({message: "message deleted successfully", data:deletedBank});
}




// routes/ routing mechanism 4.
//the routes create the views
server.get("/bank", retrieveBankController);
server.post("/bank", createBankController);
server.put("/bank", updateBankController);

server.delete("/bank", deleteBankController);


















//server listen to port
server.listen(port, ()=>(
    console.log(`server is listening on port ${port}`)
))