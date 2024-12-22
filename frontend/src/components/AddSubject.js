import React, { useState } from 'react';
import { addSubject } from '../services/api';

const AddSubject = () => {
  const [formData, setFormData] = useState({ name: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addSubject(formData);
    alert('Subject added successfully');
    setFormData({ name: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Subject Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <button type="submit">Add Subject</button>
    </form>
  );
};

export default AddSubject;
