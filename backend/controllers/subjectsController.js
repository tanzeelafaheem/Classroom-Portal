const db = require('../model/db');

// Add a new subject
exports.addSubject = (req, res) => {
  const { name } = req.body;
  const sql = 'INSERT INTO subjects (name) VALUES (?)';
  db.query(sql, [name], (err, result) => {
    if (err) throw err;
    res.send('Subject added successfully');
  });
};

// Get all subjects
exports.getSubjects = (req, res) => {
  const sql = 'SELECT * FROM subjects';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};
