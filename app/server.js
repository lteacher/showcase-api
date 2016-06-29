import express from 'express';
import userRouter from './routes/users';
import bodyParser from 'body-parser';

const app = express();

// Root path
app.get('/', (req, res) => res.sendStatus(200));

// Users router
app.use('/users', userRouter);

// Listen
app.listen(8000);

// Export the app for testing
module.exports = app;
