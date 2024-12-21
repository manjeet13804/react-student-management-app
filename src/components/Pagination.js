
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination flex items-center space-x-2">
      <button
        className={`px-4 py-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`px-4 py-2 ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => onPageChange(page)}
        >
          {currentPage}
        </button>
      ))}
      <button
        className={`px-4 py-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages+1}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
