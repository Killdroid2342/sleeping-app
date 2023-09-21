const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
require('dotenv').config();

const {
  insertItems,
  getSleepData,
  deleteSleepData,
} = require('../modal/sleepData');

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
router.get('/getSleepData', async (req, res) => {
  const totalItems = await getSleepData();
  res.send(JSON.stringify(totalItems));
});
// router.post('/deleteSleepData')
module.exports = router;
