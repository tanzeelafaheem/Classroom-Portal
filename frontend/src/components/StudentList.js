import React, { useEffect, useState } from 'react';
import { fetchStudents } from '../services/api';

const StudentsList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      const { data } = await fetchStudents();
      setStudents(data);
    };

    getStudents();
  }, []);

  return (
    <div>
      <h2>Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name} - Class {student.class} {student.section}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsList;
