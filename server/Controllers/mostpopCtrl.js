const MostPopBook = require('../Model/mostpopular');

const MostPopPostBook = async (req, res) => {
    const { title, author, condition, rentalPrice, description, owner, genre } = req.body;
    try {
        const newBook = new MostPopBook({
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

const GetPopularBooks = async (req, res) => {
    try {
        const books = await MostPopBook.find();
        res.status(200).json(books);
    } catch (error) {
        console.error('Error fetching popular books:', error);
        res.status(500).json({ message: 'Error fetching popular books' });
    }
};

module.exports = {
    MostPopPostBook,
    GetPopularBooks
};