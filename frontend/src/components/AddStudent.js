import React, { useState } from 'react';
import { addStudent } from '../services/api';

const AddStudent = () => {
  const [formData, setFormData] = useState({ name: '', class: '', section: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent(formData);
    alert('Student added successfully');
    setFormData({ name: '', class: '', section: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Class"
        value={formData.class}
        onChange={(e) => setFormData({ ...formData, class: e.target.value })}
      />
      <input
        type="text"
        placeholder="Section"
        value={formData.section}
        onChange={(e) => setFormData({ ...formData, section: e.target.value })}
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudent;
