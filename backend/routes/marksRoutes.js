const express = require('express');
const { addMarks, updateMarks, getMarks } = require('../controllers/marksController');
const router = express.Router();

router.post('/add', addMarks);
router.put('/update', updateMarks);
router.get('/', getMarks);

module.exports = router;
