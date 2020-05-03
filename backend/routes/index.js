const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(404).send('Invalid Route. Please check your request');
});

module.exports = router;
