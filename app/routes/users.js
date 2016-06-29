import express from 'express';

const router = express.Router();

// User base
router.use('/',(req,res,next) => {
  res.status(200).send('Welcome to user town!'); // Placeholder
  next();
});

/**
 * @module User router
 */
module.exports = router;
