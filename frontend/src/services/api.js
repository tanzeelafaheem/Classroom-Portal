import axios from 'axios';

// API base URL (adjust if necessary)
const API_URL = 'http://localhost:5000/api';

// Fetch students
export const fetchStudents = async () => {
  try {
    const response = await axios.get(`${API_URL}/students`);
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

// Add a new student
export const addStudent = async (studentData) => {
  try {
    const response = await axios.post(`${API_URL}/students`, studentData);
    return response.data;
  } catch (error) {
    console.error('Error adding student:', error);
    throw error;
  }
};

// Fetch subjects (add this function)
export const fetchSubjects = async () => {
  try {
    const response = await axios.get(`${API_URL}/subjects`);
    return response.data;
  } catch (error) {
    console.error('Error fetching subjects:', error);
    throw error;
  }
};

// Add a new subject (add this function)
export const addSubject = async (subjectData) => {
  try {
    const response = await axios.post(`${API_URL}/subjects`, subjectData);
    return response.data;
  } catch (error) {
    console.error('Error adding subject:', error);
    throw error;
  }
};

// Add marks (add this function)
export const addMarks = async (marksData) => {
  try {
    const response = await axios.post(`${API_URL}/marks`, marksData);
    return response.data;
  } catch (error) {
    console.error('Error adding marks:', error);
    throw error;
  }
};
