import React from 'react';

const StudentCard = ({ student }) => {
  return (
    <div className="card">
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Marks: {student.marks}</p>
      <p>Roll Number: {student.rollNumber}</p>
    </div>
  );
};

export default StudentCard;
