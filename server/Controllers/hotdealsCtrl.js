const HotBook = require('../Model/hotdeals');

const PostHotBook = async (req, res) => {
    const { title, author, condition, rentalPrice, description, owner, genre  } = req.body;
    try {
        const newBook = new HotBook({
            title,
            author,
            condition,
            rentalPrice,
            description,
            owner,
            genre
        });
        await newBook.save();
        res.status(200).json({message: 'Book Posted Successfully'});
    } catch(error) {
        console.error('Error Posting Book:', error);
        res.status(500).json({message: 'Error Posting Book'});
    }
};

const getHotDeals = async (req, res) => {
    try {
        const books = await HotBook.find();
        res.json(books);
    } catch (error) {
        console.error('Failed to fetch books:', error);
        res.status(500).json({ message: 'Failed to fetch books' });
    }
};

module.exports = {
    PostHotBook,
    getHotDeals
};