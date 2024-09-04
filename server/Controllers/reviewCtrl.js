const Review = require('../Model/review')

const PostReview = async(req, res) => {
    const { book, user, rating, comment } = req.body
    try {
        const newReview = new Review({
            book,
            user,
            rating,
            comment
        });
        await newReview.save();
        res.status(200).json({message: 'Review Posted Succesfully'});
    } catch(error) {
        console.error('Error Reviewing Book:', error);
        res.status(500).json({message: 'Error Reviewing Book'});
    }
};

module.exports = {
    PostReview
}
