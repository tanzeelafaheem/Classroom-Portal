const db = require('../models/db');

// Add a new student
exports.addStudent = (req, res) => {
  const { name, class: studentClass, section } = req.body;
  const sql = 'INSERT INTO students (name, class, section) VALUES (?, ?, ?)';
  db.query(sql, [name, studentClass, section], (err, result) => {
    if (err) throw err;
    res.send('Student added successfully');
  });
};

// Get all students
exports.getStudents = (req, res) => {
  const sql = 'SELECT * FROM students';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};
