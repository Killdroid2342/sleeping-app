const mysql = require('mysql2');
require('dotenv').config();

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sleep-tracker',
});

const insertItems = (date, bedtime, wakeUpTime, hoursofsleep) => {
  const res = conn.query(
    'INSERT INTO sleepdata (date, bedtime, wakeUpTime, hoursofsleep) VALUES (?, ?, ?, ?)',
    [date, bedtime, wakeUpTime, hoursofsleep]
  );
};
module.export = {
  insertItems,
};
