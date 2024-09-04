const BestSeller = require('../Model/bestseller');

const PostBestBook = async (req, res) => {
    const { title, author, condition, rentalPrice, description, owner, genre } = req.body;
    try {
        const newBook = new BestSeller({
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

const GetBestBooks = async (req, res) => {
    try {
        const books = await BestSeller.find();
        res.status(200).json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ message: 'Error fetching books' });
    }
};

module.exports = {
    PostBestBook,
    GetBestBooks
};