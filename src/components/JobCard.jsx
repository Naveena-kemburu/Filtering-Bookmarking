import React from 'react';
import useJobStore from '../store/useJobStore';

function JobCard({ job }) {
  const { companies, bookmarkedJobs, toggleBookmark } = useJobStore();
  const company = companies.find(c => c.id === job.companyId);
  const isBookmarked = bookmarkedJobs.includes(job.id);

  return (
    <div className="job-card" data-testid={`job-card-${job.id}`}>
      <button
        className="bookmark-btn"
        data-testid={`bookmark-btn-${job.id}`}
        data-bookmarked={isBookmarked}
        onClick={() => toggleBookmark(job.id)}
      >
        {isBookmarked ? '★' : '☆'}
      </button>
      
      <h3>{job.title}</h3>
      <div className="company">{company?.name}</div>
      
      <div className="details">
        <span>📍 {job.location}</span>
        <span>💼 {job.jobType}</span>
        <span data-testid="job-salary">💰 ${job.salary.toLocaleString()}</span>
        <span>📊 {job.experienceLevel}</span>
      </div>
      
      <div className="skills">
        {job.skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default JobCard;
