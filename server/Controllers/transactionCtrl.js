const Transaction = require("../Model/transaction")


const Pay = async (req, res) => {
    const { rental, amount, status} = req.body
    try{
        const newTransaction = new Transaction({
            rental,
            amount,
            status
        });
        await newTransaction.save();
        res.status(200).json({message: 'Transaction Completed Successfully Succesfully'});
    } catch (error) {
        console.error('Error in Transaction:', error);
        res.status(500).json({message: 'Error in Transaction'});
    }
}

module.exports = {
    Pay
}