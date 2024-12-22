import React, { useState, useEffect } from 'react';
import { addMarks } from '../services/api';
import { fetchStudents } from '../services/api';
import { fetchSubjects } from '../services/api';

const AddMarks = () => {
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [formData, setFormData] = useState({ student_id: '', subject_id: '', marks: '' });

  useEffect(() => {
    const getStudents = async () => {
      const { data } = await fetchStudents();
      setStudents(data);
    };

    const getSubjects = async () => {
      const { data } = await fetchSubjects();
      setSubjects(data);
    };

    getStudents();
    getSubjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addMarks(formData);
    alert('Marks added successfully');
    setFormData({ student_id: '', subject_id: '', marks: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={formData.student_id}
        onChange={(e) => setFormData({ ...formData, student_id: e.target.value })}
      >
        <option value="">Select Student</option>
        {students.map((student) => (
          <option key={student.id} value={student.id}>
            {student.name}
          </option>
        ))}
      </select>

      <select
        value={formData.subject_id}
        onChange={(e) => setFormData({ ...formData, subject_id: e.target.value })}
      >
        <option value="">Select Subject</option>
        {subjects.map((subject) => (
          <option key={subject.id} value={subject.id}>
            {subject.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Marks"
        value={formData.marks}
        onChange={(e) => setFormData({ ...formData, marks: e.target.value })}
      />
      <button type="submit">Add Marks</button>
    </form>
  );
};

export default AddMarks;
