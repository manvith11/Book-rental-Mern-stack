const NewBook = require('../Model/newbook');

const PostNewBook = async (req, res) => {
    const { title, author, condition, rentalPrice, description, owner, genre } = req.body;
    try {
        const newBook = new NewBook({
            title,
            author,
            condition,
            rentalPrice,
            description,
            owner,
            genre
        });
        await newBook.save();
        res.status(200).json({ message: 'Book Posted Successfully' });
    } catch (error) {
        console.error('Error Posting Book:', error);
        res.status(500).json({ message: 'Error Posting Book' });
    }
};

const GetNewArrivals = async (req, res) => {
    try {
        const newBooks = await NewBook.find(); // Fetch all books classified as New Arrivals
        res.status(200).json(newBooks);
    } catch (error) {
        console.error('Error fetching new arrivals:', error);
        res.status(500).json({ message: 'Error fetching new arrivals' });
    }
};

module.exports = {
    PostNewBook,
    GetNewArrivals
};