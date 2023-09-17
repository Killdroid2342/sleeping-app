const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
require('dotenv').config();

const { insertItems } = require('../modal/sleepData');

router.get('/addToDatabase', async (req, res) => {
  const data = [{}];
  data.map((index) => {
    const { date, bedtime, wakeUpTime, hoursofsleep } = index;
    // insertItems(date, bedtime, wakeUpTime, hoursofsleep);
  });
  res.send('Hello');
});
module.exports = router;
