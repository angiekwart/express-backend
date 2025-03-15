// // import http module
// const http = require('http');
// const server = http.createServer();
// create server
const express = require('express');
const server = express();



// creating handlers for the routes
const handleHomePage = (req, res) => {
    res.send("This is the middleware");
    console.log("Welcome to my Node.js server");
}
const handleContact = (req, res) => {
    res.send("Contact us at: example@example.com");
    console.log("Contact is shared.");
}
const handleContactMiddleware = (req, res, next) => {
    res.send("This is the middleware contact page"); 
    console.log("Middleware Contact.");
    next();
}

const handleAbout = (req, res) => {
    res.send("This the about page");
    console.log("Request is received");
}
const handleAboutMiddleware = (req, res, next) => {
    res.send("This the middleware about page");
    console.log("Request is received");
    next();
}


// create my routes and methods
server.post('/about', handleAboutMiddleware, handleAbout);
server.put('/contact', handleContactMiddleware, handleContact);
server.use('/', handleHomePage);



//listen on port 5000
server.listen(5000, 'localhost', ()=>console.log("Server is running on port 5000"));