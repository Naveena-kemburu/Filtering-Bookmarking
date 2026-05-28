import React from 'react';
import useJobStore from '../store/useJobStore';

function SortDropdown() {
  const { sortBy, setSortBy } = useJobStore();

  return (
    <select
      className="sort-select"
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option value="date">Sort by Date</option>
      <option value="salary-desc" data-testid="sort-salary-desc">Sort by Salary (High to Low)</option>
      <option value="salary-asc">Sort by Salary (Low to High)</option>
    </select>
  );
}

export default SortDropdown;
