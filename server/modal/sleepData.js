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
const getSleepData = async (clientUsername) => {
  const [rows, fields] = await conn
    .promise()
    .query('SELECT * FROM sleepdata WHERE clientUsername = ?', [
      clientUsername,
    ]);
  return rows;
};

module.exports = {
  insertItems,
  getSleepData,
};
