const Contact = require('../Model/contact')

const submitFeedback = async (req, res) => {
    const { name, email, feedback } = req.body;
    try {
        const newContact = new Contact({
            name,
            email,
            feedback
        });
        
        await newContact.save();

        res.status(200).json({ message: 'Feedback Submitted Successfully' });
        //200: All okay, 404: Error,503:node.js gives error, 500 user defined error.
    } catch (error) {
        console.error('Error saving feedback: ', error);
        res.status(500).json({ message: 'Error Submiting Feedback' });
    }
};

module.exports = {
    submitFeedback
}