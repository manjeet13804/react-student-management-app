import React from "react";

export  const TableRow = ({ children }) => {
  return (
    <tr>
      {children}
    </tr>
  );
};


export const TableHeader = ({ children }) => {
  return (
    <thead>
      {children}
    </thead>
  );
};




export const TableHead = ({ children }) => {
  return (
    <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 text-gray-600 uppercase tracking-wider">
      {children}
    </th>
  );
};




export const TableCell = ({ children }) => {
  return (
    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      {children}
    </td>
  );
};




export const TableBody = ({ children }) => {
  return (
    <tbody className="text-gray-700">
      {children}
    </tbody>
  );
};




export const Table = ({ children }) => {
  return (
    <table className="min-w-full bg-white">
      {children}
    </table>
  );
};




 