// // import express
// const express = require('express');
// const server = express();

// // port hosting server
// const PORT = 3011;

// // creating a handler for my middleware
// const handlemiddleware = (req, res, next) => {
//     res.send("Hello from middleware");
//     console.log("Middleware is running");
//     next();
// }

// //server should use  the middleware
// server.use(handlemiddleware);


// // listen on port 5500
// server.listen(PORT, '127.0.0.1', ()=>console.log(`Server is running on port ${PORT}`));



///Part 2
// sending files to the client. This require the use of path
const express = require('express');
const  path = require('path');
const server = express();

const PORT = 3013;

// using a function to fetch static files to my home page
const serveHomePage = (req, res) =>{
    //fetch the file
    const homePageFile = path.join(__dirname, 'public', 'index.html');
    //send the file to the client
    res.sendFile(homePageFile);
}
const serveAboutPage = (req, res) =>{
    //fetch the file
    const aboutPageFile = path.join(__dirname, 'public', 'about.html');
    //send the file to the client
    res.sendFile(aboutPageFile);
}

//create routes
server.get('/', serveHomePage);
server.get('/about', serveAboutPage);





//listen on port
server.listen(PORT, '127.0.0.1', ()=>console.log(`Server is running on port ${PORT}`));