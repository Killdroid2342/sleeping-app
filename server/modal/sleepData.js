const { getDbConn } = require('../util');
require('dotenv').config();

const insertItems = (
  date,
  bedtime,
  wakeUpTime,
  hoursofsleep,
  clientUsername
) => {
  const conn = getDbConn();
  conn.query(
    'INSERT INTO sleeptracker_sleepdata (date, bedtime, wakeUpTime, hoursofsleep, clientUsername ) VALUES (?, ?, ?, ?, ?)',
    [date, bedtime, wakeUpTime, hoursofsleep, clientUsername]
  );
  conn.end();
};
const getSleepData = async (clientUsername) => {
  const conn = getDbConn();
  const [rows, fields] = await conn
    .promise()
    .query('SELECT * FROM sleeptracker_sleepdata WHERE clientUsername = ?', [
      clientUsername,
    ]);
  conn.end();
  return rows;
};

const deleteSleepData = async (clientUsername) => {
  const conn = getDbConn();
  const [rows, fields] = await conn
    .promise()
    .query('DELETE FROM sleeptracker_sleepdata WHERE clientUsername = ?', [
      clientUsername,
    ]);
  conn.end();
  return rows;
};

module.exports = {
  insertItems,
  getSleepData,
  deleteSleepData,
};
