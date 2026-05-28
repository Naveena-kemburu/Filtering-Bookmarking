import React from 'react';
import useJobStore from '../store/useJobStore';
import JobCard from '../components/JobCard';

function Tracker() {
  const { jobs, bookmarkedJobs } = useJobStore();
  const bookmarkedJobsList = jobs.filter(job => bookmarkedJobs.includes(job.id));

  return (
    <div className="container">
      <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>Application Tracker</h2>
      
      {bookmarkedJobsList.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', background: 'white', borderRadius: '8px' }}>
          No bookmarked jobs yet. Start bookmarking jobs from the main page!
        </div>
      ) : (
        <div className="job-list-container" data-view-mode="grid">
          {bookmarkedJobsList.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Tracker;
