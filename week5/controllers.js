//import model from the model.js file
const bankModel = require('./model');

//handlers/ controllers / views.
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

module.exports = {createBankController, retrieveBankController, updateBankController, deleteBankController};