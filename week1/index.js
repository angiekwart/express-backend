// import http module
const http = require("http");


// creating handlers for the routes
const handleAllRequest = (req, res) => {
    const url = req.url;
    if (url === '/') {
        res.write("<h1>Welcome to my Node.js server</h1>");
    } else if (url === '/contact') {
        res.write("<h1>Contact us at: example@example.com</h1>");
    } else if (url === '/about') {
        res.write("<h1>This the about page</h1>");
    } else if (url === '/services'){
        res.write("<h1>This the services page</h1>");
    } else{
        res.write("Page not found");
    }
    console.log(req);
}



// create server to listen to the request
const server = http.createServer(handleAllRequest);

//listen on port 5000
server.listen(5000, "localhost", ()=>console.log("Server is running on port 5000"));