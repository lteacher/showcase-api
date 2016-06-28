import express from 'express';
import userRouter from './routes/users';

class Server {
  app = express();

  constructor() {
    // Set base route
    this.app.get('/', (req, res) => res.sendStatus(200));

    // Init routers
    this.app.use('/users', userRouter);
  }

  start = (port = 8000) => this.app.listen(port);
}

module.exports = new Server();
