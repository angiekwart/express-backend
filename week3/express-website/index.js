//import module
const express = require('express');
const path = require('path');         //to serve  static files
const server = express();

//create a port
PORT = 5500;


//creating individual handlers for each page
// using a function to fetch static files to my home page
const serveHomePage = (req, res) =>{
    //fetch the file
    const homePageFile = path.join(__dirname, 'pages', 'index.html');
    //send the file to the client
    res.sendFile(homePageFile);
}
const serveAboutPage = (req, res) =>{
    //fetch the file
    const aboutPageFile = path.join(__dirname, 'pages', 'about.html');
    //send the file to the client
    res.sendFile(aboutPageFile);
}
const serveContactPage = (req, res) =>{
    //fetch the file
    const contactPageFile = path.join(__dirname, 'pages', 'contact.html');
    //send the file to the client
    res.sendFile(contactPageFile);
}

//creating routes and methods
server.get('/', serveHomePage);
server.get('/about', serveAboutPage);
server.get('/contact', serveContactPage);



//fetch the file from the pages folder and serve it to the client
const allPageFile = express.static(path.join(__dirname, 'pages'));
server.use(allPageFile);




//listening on port 5500
server.listen(PORT, '127.0.0.1', ()=>console.log(`Server is running on port ${PORT}`));