import React from 'react';
import AddStudent from './components/AddStudent';
import StudentsList from './components/StudentList';
import AddMarks from './components/AddMarks';
import AddSubject from './components/AddSubject';

const App = () => {
  return (
    <div>
      <h1>Class Portal</h1>
      <AddStudent />
      <AddSubject />
      <AddMarks />
      <StudentsList />
    </div>
  );
};

export default App;
