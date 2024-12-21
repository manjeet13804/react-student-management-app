import React, { useState, useEffect } from 'react';
import { getStudents } from './api';
import StudentTable from './components/StudentTable';
import StudentCard from './components/StudentCard';
import Pagination from './components/Pagination';

const StudentManagementPage = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    getStudents(10, currentPage).then((data) => setStudents(data));
  }, [currentPage]);

  const totalPages = Math.ceil(students.length / 10);
console.log(totalPages)
  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Student Management Page</h1>
      {isMobile ? (
        <div className="grid grid-cols-1 gap-4">
          {students.map((student) => (
            <StudentCard key={student.rollNumber} student={student} />
          ))}
        </div>
      ) : (
        <StudentTable students={students} />
      )}
      {!isMobile && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default StudentManagementPage;
