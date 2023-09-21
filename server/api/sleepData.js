const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
require('dotenv').config();

const { insertItems, getSleepData } = require('../modal/sleepData');

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

router.post('/getSleepData', async (req, res) => {
  const { clientUsername } = req.body;
  console.log(clientUsername);
  const results = await getSleepData(clientUsername);
  console.log(results);
  res.send(results);
});

module.exports = router;
