const express = require('express');
const { addForm } = require('../controller/userController');

const router = express.Router();

router.post('/submit', addForm);

module.exports = router;