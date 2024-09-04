const Notify = require('../Model/notification')

const Notifyuser = async (req, res) => {
    const {user, message, read, } = req.body
    try {
        const newNotify = new Notify({
            user,
            message,
            read
        });

        await newNotify.save();

        res.status(200).json({ message: 'Notification create Successfully'});
    } catch(error) {
        console.error('Error saving Notification', error);
        res.status(500).json({ message: 'Error saving Notification'});
    }
};

module.exports = { 
    Notifyuser
}
