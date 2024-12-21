import React from 'react';
import  DataTable from './DataTable';

const StudentTable = ({ students }) => {
  console.log(students)
  return (
    <DataTable
      data={students}
      columns={[
        { id : '1',Header: 'Name', accessorKey: 'name' },
        { id : '2', Header: 'Age', accessorKey: 'age' },
        { id : '3', Header: 'Marks', accessorKey: 'marks' },
        { id : '4', Header: 'Roll Number', accessorKey: 'rollNumber' },
        { id : '5', Header: 'Class', accessorKey: 'class' },
        { id : '6', Header: 'City', accessorKey: 'city' },
        { id : '7', Header: 'Attendance', accessorKey: 'attendance' }
      ]}
    />
  );
};

export default StudentTable;


