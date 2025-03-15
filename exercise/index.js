const express = require('express');
const bodyParser = require('body-parser');

//create server
server = express();
server.use(bodyParser.json());    //middleware

//connect to database
let bookdb = []


// create models
function BookModel ({Title, Author, Description}){
    const book = {
        Title,
        Author,
        Description,

        //method to save book added
        save: function () {
            bookdb.push(this);
            return this;
        },
    };
    return book;

}

//controllers
const createBookDetails = (req, res) => {
    const { Title, Author, Description } = req.body;         //for the request body
    const book = new BookModel({
        Title, 
        Author, 
        Description}
    )
    book.save();
    res.json({message: "Book Deatils are retrieved successfully", data:book});
}
const retrieveBookDetails = (req, res) => {
    res.json({message: "Book Deatils are retrieved successfully" });
}


//routes
server.post('/books', createBookDetails);
server.get('/books', retrieveBookDetails);



//listen to port
server.listen(3000, "localhost", console.log("Server is running on port 3000"));