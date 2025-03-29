//import relevant packages
const express = require('express');
const bodyparser = require('body-parser');

//initialize the server
const server = express();
port = 5000;
//create a middleware to parse the body of the request
server.use(bodyparser.json());

//create an empty database
let booksDb =[];

//model class
class bookModel{
    constructor({title, author, description}){
        this.title = title;
        this.author = author;
        this.description = description;
    }save(){
        booksDb.push(this);
        return this;
    }
    static all(){
        return booksDb;
    }
    static update(updateInfo ={}){
        booksDb = booksDb.map(book =>{
            if(book.title == updateInfo.title){
                return { ...book, ...updateInfo };
            }
            return book;
        })

    }
    static delete(title){
        booksDb = booksDb.filter(book =>{
            if(book.title == title){
                return false;
            }
            return true;
        })
    }
}
//controllers
const createBookDetails =(req, res) =>{
    //create a book from the post method
    const {title, author, description} = req.body;
    //create a new book
    const book = new bookModel({title, author, description});
    //save book details
    book.save();
    res.json({message:"book created successfully", data:book});
}
const receiveBookDetails = (req, res) =>{
    //get all books from the database
    const books = bookModel.all();
    res.json({data:books});
}
const updateBookDetails = (req, res) =>{
    const {title, author, description} = req.body;
    const updatedBook = bookModel.update({title, author, description});
    res.json({message:"book updated successfully", data:updatedBook});
}
const deleteBookDetails = (req, res) =>{
    const {title} = req.body;
    const deletedBook = bookModel.delete(title);
    res.json({message:"book deleted successfully", data:deletedBook});
}

//routes
server.get('/books', receiveBookDetails);
server.post('/books', createBookDetails);
server.put('/books', updateBookDetails);
server.delete('/books', deleteBookDetails);



//server listening port
server.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
})