const express = require('express');
const RunServer = require('./Database/connection');
const userRoutes = require('./Routes/userRoutes');
const contactRoutes = require('./Routes/contactRoutes');
const bookRoutes = require('./Routes/bookRoutes');
const rentalRoutes = require('./Routes/rentalRoutes');
const reviewRoutes = require('./Routes/reviewRoutes');
const transactionRoutes = require('./Routes/transactionRoutes');
const notifyRoutes = require('./Routes/notifyRoutes');
const hotRoutes = require('./Routes/hotRoutes');
const bestRoutes = require('./Routes/bestRoutes');
const newRoutes = require('./Routes/newRoutes');
const mostpopRoutes = require('./Routes/mostpopRoutes');
const bookDetailsRoutes = require('./Routes/BookDetailsRoutes'); // New route file for book details
const paymentRoutes = require('./Routes/PaymentRoutes'); // New route file for payment

const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = 3000;

RunServer();

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

// Route middlewares
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/contact', contactRoutes);
app.use('/api/v1/', bookRoutes);
app.use('/api/v1/', rentalRoutes);
app.use('/api/v1/', reviewRoutes);
app.use('/api/v1/', transactionRoutes);
app.use('/api/v1/', notifyRoutes);
app.use('/api/v1/', hotRoutes);
app.use('/api/v1/', bestRoutes);
app.use('/api/v1/', newRoutes);
app.use('/api/v1/', mostpopRoutes);
app.use('/api/v1/', bookDetailsRoutes); // Use the new book details routes
app.use('/api/v1/', paymentRoutes); // Use the new payment routes

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});