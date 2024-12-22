import React, { useEffect, useState } from 'react';
import { fetchStudents } from '../services/api';

const StudentsList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const data = await fetchStudents();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    getStudents();
  }, []);

  return (
    <div>
      <h2>Students List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.class} - {student.section}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsList;
