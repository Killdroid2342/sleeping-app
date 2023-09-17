const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
require('dotenv').config();

const { insertItems } = require('../modal/sleepData');

router.use(bodyParser.json());

router.post('/addToDatabase', async (req, res) => {
  const { date, bedtime, wakeUpTime, hoursofsleep } = req.body;
  console.log(date, bedtime, wakeUpTime, hoursofsleep, 'DATA');
  try {
    insertItems(date, bedtime, wakeUpTime, hoursofsleep);
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
