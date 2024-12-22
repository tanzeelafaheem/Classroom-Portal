import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchStudents = () => API.get('/students');
export const addStudent = (student) => API.post('/students/add', student);

// Add similar methods for subjects and marks
