const Rental = require('../Model/rental')

const RentBook = async (req, res) => {
    const { book, renter, owner, rentalStartDate, rentalEndDate, status } = req.body
    try{
        const newRent = new Rental({
            book,
            renter,
            owner,
            rentalStartDate,
            rentalEndDate,
            status
        });
        await newRent.save();
        res.status(200).json({message: 'Rent Requested Successfully'});
    } catch(error) {
        console.error('Error Renting Book', error);
        res.status(500).json({message: 'Error Renting Book'});
    }
};

module.exports = {
    RentBook
}