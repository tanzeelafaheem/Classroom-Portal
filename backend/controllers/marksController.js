const db = require('../models/db');

// Add marks
exports.addMarks = (req, res) => {
  const { student_id, subject_id, marks } = req.body;
  const sql = 'INSERT INTO marks (student_id, subject_id, marks) VALUES (?, ?, ?)';
  db.query(sql, [student_id, subject_id, marks], (err, result) => {
    if (err) throw err;
    res.send('Marks added successfully');
  });
};

// Update marks
exports.updateMarks = (req, res) => {
  const { id, marks } = req.body;
  const sql = 'UPDATE marks SET marks = ? WHERE id = ?';
  db.query(sql, [marks, id], (err, result) => {
    if (err) throw err;
    res.send('Marks updated successfully');
  });
};

// Get all marks
exports.getMarks = (req, res) => {
  const sql = `
    SELECT 
      marks.id, 
      students.name AS student_name, 
      subjects.name AS subject_name, 
      marks.marks 
    FROM marks
    JOIN students ON marks.student_id = students.id
    JOIN subjects ON marks.subject_id = subjects.id
  `;
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};
