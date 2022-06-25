const Book = require("../models/bookModel");

// Get All Books 
const getAllBooks = async (req, res) => {
    let books;
    try {
        books = await Book.find();
    } catch (err) {
        console.log("Error Finding Books :" + err);
    }

    if (!books) {
        return res.status(404).json({ message: "No Books Found" });
    }
    return res.status(200).json({ books });

}

//Get Book by ID
const getBookById = async (req, res) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);
    } catch (err) {
        console.log("Cannot find book by the Id :" + err);
    }
    if (!book) {
        return res.status(404).json({ message: "Book not Found" });
    }
    return res.status(200).json({ book });
}

//Add a Book
const addBook = async (req, res) => {
    const { name, author, desc, price, available, image } = req.body;
    let book;
    try {
        book = new Book({
            name,
            author,
            desc,
            price,
            available,
            image
        });
        await book.save();
    } catch (err) {
        console.log("Error Adding Book :" + err);
    }
    if (!book) {
        return res.status(500).json({ message: "Unable to Add Book" });
    }
    return res.status(201).json({ book });
}

//Update Book by ID
const updateBookById = async (req, res) => {
    const { name, author, desc, price, available, image } = req.body;
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            desc,
            price,
            available,
            image
        });
        book = await book.save();
    } catch (err) {
        console.log("Error Updating Book :" + err);
    }
    if (!book) {
        return res.status(500).json({ message: "Unable to Update book by this ID" });
    }
    return res.status(201).json({ book });
}

//Delete Book by ID
const deleteBookById = async (req, res) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndRemove(id);
    } catch (err) {
        console.log("Cannot Delete the Book :" + err);
    }
    if (!book) {
        return res.status(404).json({ message: "Unable to Delete Book" });
    }
    return res.status(200).json({ message: "Book Delete Successfully" });
}

exports.getAllBooks = getAllBooks;
exports.getBookById = getBookById;
exports.addBook = addBook;
exports.updateBookById = updateBookById;
exports.deleteBookById = deleteBookById;