const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
require('dotenv').config();

const {
  createUser,
  isUserExists,
  hashPassword,
  comparePassswords,
  deleteUser,
} = require('../modal/user');

const { jwtToken } = require('../modal/token');
router.use(bodyParser.json());

router.post('/register-user', async (req, res) => {
  const { username, password } = req.body;
  const saltRounds = 12;
  const hashPasswordRes = await hashPassword(password, saltRounds);
  if ((await isUserExists(username)) == false) {
    createUser(username, hashPasswordRes);
    res.send({
      message: 'Users created successfully',
    });
  } else {
    res.send({
      message: 'Username already exists',
    });
  }
});

router.post('/login-user', async (req, res) => {
  const { username, clientpassword } = req.body;
  const { password } = await isUserExists(username);
  try {
    if (
      (await isUserExists(username)) !== false &&
      (await comparePassswords(clientpassword, password)) == true
    ) {
      res.send({
        message: 'Correct Details',
        token: jwtToken(username),
      });
    } else {
      res.send({
        message: 'Wrong Details',
      });
    }
  } catch (err) {
    console.log(err);
  }
});
router.post('/delete-user', async (req, res) => {
  const { clientUsername } = req.body;
  try {
    await deleteUser(clientUsername);
    res.send({
      message: 'User account deleted successfully',
    });
  } catch (e) {
    console.log(e);
    res.send({
      message: 'An error occurred while deleting the user account',
    });
  }
});

module.exports = router;
