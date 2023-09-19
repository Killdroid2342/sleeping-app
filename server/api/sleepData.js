const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
require('dotenv').config();

const { insertItems } = require('../modal/sleepData');

router.use(bodyParser.json());

router.post('/addToDatabase', async (req, res) => {
  const { date, bedtime, wakeUpTime, hoursofsleep, clientUsername } = req.body;
  console.log(date, bedtime, wakeUpTime, hoursofsleep, clientUsername, 'DATA');
  try {
    insertItems(date, bedtime, wakeUpTime, hoursofsleep, clientUsername);
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
