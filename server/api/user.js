const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
require('dotenv').config();

router.use(bodyParser.json());
