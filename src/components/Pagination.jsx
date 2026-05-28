import React from 'react';
import useJobStore from '../store/useJobStore';

function Pagination() {
  const { currentPage, setCurrentPage, getTotalPages } = useJobStore();
  const totalPages = getTotalPages();

  return (
    <div className="pagination-controls" data-testid="pagination-controls">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        data-testid="pagination-prev"
      >
        Previous
      </button>
      
      <span className="page-info">
        Page {currentPage} of {totalPages || 1}
      </span>
      
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        data-testid="pagination-next"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
