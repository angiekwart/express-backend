//import all relevant modules
const express = require('express');
const bodyParser = require('body-parser');

//create a server and a port
const server = express();
const port = 5500;

//create a middleware to parse the body of the request
server.use(bodyParser.json());

//create an empty database
let shoesDb = [];

//models
class shoeModel{
    constructor({name, brand, category, color, size, price}){
        this.name = name;
        this.brand = brand;
        this.category = category;
        this.color = color;
        this.size = size;
        this.price = price;
    }
    //save the database' blueprint created
    save(){
        shoesDb.push(this);
        return this;
    }
    //create get method
    static all(){
        return shoesDb;
    }
    //create update method
    static update(updateInfo={}){
        shoesDb = shoesDb.map(shoe => {
            if(shoe.name === updateInfo.name){
                return {...shoe, ...updateInfo}; //overwrite existing with updated info
            }
            return shoe;
        });
    }
    //create delete method
    static delete({name}){
        let deleteShoe = null;
        shoesDb = shoesDb.filter(shoe => {
            if(shoe.name !== name){
                return true;
            }deleteShoe = shoe;
            return false;
        });
    return deleteShoe;
    }
}

//controllers
const createShoeDetails = (req, res) => {
    //create a shoe from the post method
    const {name, brand, category, color, size, price} = req.body; //get these details as request body
    //create a new shoe
    const shoe = new shoeModel({name, brand, category, color, size, price});
    //save shoe details
    shoe.save();
    res.json({message:"message created successfully",data:shoe}); //respond to client with the shoe details in json format
}

const getShoeDetails = (req, res) =>{
    //list all shoes
    const shoes = shoeModel.all();
    res.json({data: shoes});
}

const updateShoeDetails = (req, res) =>{
    //update shoe details
    const {name, brand, category, color, size, price} = req.body; //get these details as request body
    //create variable to store the updated shoe details
    const updatedShoe = shoeModel.update({name, brand, category, color, size, price}); //input new details
    res.json({message:"shoe details updated successfully", data:updatedShoe});
}

const deleteShoeDetails = (req, res) =>{
    //delete shoe details
    const {name} = req.body; //get the name as request body
    //create variable to store the deleted shoe details
    const deletedShoe = shoeModel.delete({name}); //delete shoe details
    res.json({message:"shoe details deleted successfully", data:deletedShoe});
}

//routes
server.get('/shoe', getShoeDetails);
server.post('/shoe', createShoeDetails);
server.put('/shoe', updateShoeDetails);
server.delete('/shoe', deleteShoeDetails);



//listen to the server
server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});