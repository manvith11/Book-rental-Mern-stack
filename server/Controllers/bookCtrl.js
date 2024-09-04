const Book = require('../Model/book')

const PostBook = async (req, res) => {
    const { title, author, condition, rentalPrice, description, owner, genre  } = req.body
    try {
        const newBook = new Book({
            title,
            author,
            condition,
            rentalPrice,
            description,
            owner,
            genre
        });
        await newBook.save();
        res.status(200).json({message: 'Book Posted Succesfully'});
    } catch(error) {
        console.error('Error Posting Book:', error);
        res.status(500).json({message: 'Error Posting Book'});
    }
};

const GetBooks = async (req, res) => {
    const { genre, condition, sortBy, search } = req.query;

    let query = {};
    if (genre) {
        query.genre = { $in: genre.split(',') };
    }
    if (condition) {
        query.condition = condition;
    }
    if (search) {
        query.title = { $regex: search, $options: 'i' }; // Add regex search for title
    }

    let sort = {};
    if (sortBy) {
        sort = sortBy === 'Upload Date' ? { createdAt: -1 } : { title: 1 };
    }

    try {
        const books = await Book.find(query).sort(sort);
        res.status(200).json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ message: 'Error fetching books' });
    }
};

module.exports = {
    PostBook,
    GetBooks
}