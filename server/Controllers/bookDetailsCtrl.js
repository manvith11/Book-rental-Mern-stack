const Book = require('../Model/book'); // Assuming you have a Book model

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).send({ message: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving book details' });
    }
};