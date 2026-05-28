import React from 'react';
import useJobStore from '../store/useJobStore';
import FiltersPanel from '../components/FiltersPanel';
import SearchBar from '../components/SearchBar';
import SortDropdown from '../components/SortDropdown';
import ViewToggle from '../components/ViewToggle';
import JobCard from '../components/JobCard';
import Pagination from '../components/Pagination';

function JobListings() {
  const { viewMode, getPaginatedJobs } = useJobStore();
  const jobs = getPaginatedJobs();

  return (
    <div className="main-content">
      <FiltersPanel />
      
      <div className="jobs-section">
        <div className="jobs-header">
          <div className="search-sort-container">
            <SearchBar />
            <SortDropdown />
          </div>
          <ViewToggle />
        </div>

        <div 
          className="job-list-container" 
          data-testid="job-list-container"
          data-view-mode={viewMode}
        >
          {jobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {jobs.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', background: 'white', borderRadius: '8px' }}>
            No jobs found matching your criteria.
          </div>
        )}

        <Pagination />
      </div>
    </div>
  );
}

export default JobListings;
