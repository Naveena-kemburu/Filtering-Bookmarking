import React, { useState, useEffect } from 'react';
import useJobStore from '../store/useJobStore';
import { useDebounce } from '../hooks/useDebounce';

function SearchBar() {
  const { setFilter } = useJobStore();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    setFilter('searchQuery', debouncedSearchTerm);
  }, [debouncedSearchTerm, setFilter]);

  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search by job title or company..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      data-testid="search-input"
    />
  );
}

export default SearchBar;
