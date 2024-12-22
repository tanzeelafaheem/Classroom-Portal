const express = require('express');
const { addStudent, getStudents } = require('../controllers/studentsController');
const router = express.Router();

router.post('/add', addStudent);
router.get('/', getStudents);

module.exports = router;
