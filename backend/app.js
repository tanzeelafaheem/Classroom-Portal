const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const studentsRoutes = require('./routes/studentsRoutes');
const subjectsRoutes = require('./routes/subjectsRoutes');
const marksRoutes = require('./routes/marksRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/students', studentsRoutes);
app.use('/subjects', subjectsRoutes);
app.use('/marks', marksRoutes);

// Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
