const mysql = require('mysql2');
require('dotenv').config();

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sleep-tracker',
});
const insertItems = (
  date,
  bedtime,
  wakeUpTime,
  hoursofsleep,
  clientUsername
) => {
  conn.query(
    'INSERT INTO sleepdata (date, bedtime, wakeUpTime, hoursofsleep, clientUsername ) VALUES (?, ?, ?, ?, ?)',
    [date, bedtime, wakeUpTime, hoursofsleep, clientUsername]
  );
};
const getSleepData = async () => {
  const res = conn
    .promise()
    .query('SELECT * from sleepdata')
    .then(([rows, fields]) => {
      return rows;
    });
  return res;
};
module.exports = {
  insertItems,
  getSleepData,
};
