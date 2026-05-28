import React from 'react';
import Select from 'react-select';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import useJobStore from '../store/useJobStore';

const allSkills = [
  'React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'Java',
  'GraphQL', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'AWS',
  'Azure', 'CSS', 'Redux', 'Vue.js', 'Angular', 'Spring Boot',
  'Django', 'Terraform', 'Spark', 'SQL', 'iOS', 'React Native',
  'Figma', 'Selenium', 'Testing', 'Security', 'Penetration Testing',
  'TensorFlow', 'PyTorch', 'Linux', 'Monitoring', 'Architecture',
  'Product Design', 'Microservices'
];

const skillOptions = allSkills.map(skill => ({ value: skill, label: skill }));

function FiltersPanel() {
  const { filters, setFilter, clearFilters } = useJobStore();

  const handleSkillsChange = (selectedOptions) => {
    const skills = selectedOptions ? selectedOptions.map(opt => opt.value) : [];
    setFilter('skills', skills);
  };

  const handleSalaryChange = (value) => {
    setFilter('salaryRange', value);
  };

  return (
    <div className="filters-panel">
      <h3>Filters</h3>

      <div className="filter-section">
        <h4>Job Type</h4>
        <label>
          <input
            type="radio"
            name="jobType"
            value=""
            checked={filters.jobType === ''}
            onChange={(e) => setFilter('jobType', e.target.value)}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="jobType"
            value="Remote"
            checked={filters.jobType === 'Remote'}
            onChange={(e) => setFilter('jobType', e.target.value)}
            data-testid="filter-job-type-remote"
          />
          Remote
        </label>
        <label>
          <input
            type="radio"
            name="jobType"
            value="Hybrid"
            checked={filters.jobType === 'Hybrid'}
            onChange={(e) => setFilter('jobType', e.target.value)}
            data-testid="filter-job-type-hybrid"
          />
          Hybrid
        </label>
        <label>
          <input
            type="radio"
            name="jobType"
            value="Onsite"
            checked={filters.jobType === 'Onsite'}
            onChange={(e) => setFilter('jobType', e.target.value)}
          />
          Onsite
        </label>
      </div>

      <div className="filter-section">
        <h4>Experience Level</h4>
        <label>
          <input
            type="radio"
            name="experienceLevel"
            value=""
            checked={filters.experienceLevel === ''}
            onChange={(e) => setFilter('experienceLevel', e.target.value)}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="experienceLevel"
            value="Internship"
            checked={filters.experienceLevel === 'Internship'}
            onChange={(e) => setFilter('experienceLevel', e.target.value)}
          />
          Internship
        </label>
        <label>
          <input
            type="radio"
            name="experienceLevel"
            value="Junior"
            checked={filters.experienceLevel === 'Junior'}
            onChange={(e) => setFilter('experienceLevel', e.target.value)}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experienceLevel"
            value="Mid"
            checked={filters.experienceLevel === 'Mid'}
            onChange={(e) => setFilter('experienceLevel', e.target.value)}
          />
          Mid
        </label>
        <label>
          <input
            type="radio"
            name="experienceLevel"
            value="Senior"
            checked={filters.experienceLevel === 'Senior'}
            onChange={(e) => setFilter('experienceLevel', e.target.value)}
          />
          Senior
        </label>
      </div>

      <div className="filter-section">
        <h4>Skills</h4>
        <div data-testid="filter-skills">
          <Select
            isMulti
            options={skillOptions}
            value={skillOptions.filter(opt => filters.skills.includes(opt.value))}
            onChange={handleSkillsChange}
            placeholder="Select skills..."
          />
        </div>
      </div>

      <div className="filter-section">
        <h4>Salary Range</h4>
        <div data-testid="filter-salary-slider">
          <Slider
            range
            min={0}
            max={200000}
            step={5000}
            value={filters.salaryRange}
            onChange={handleSalaryChange}
          />
        </div>
        <div className="salary-range-display">
          ${filters.salaryRange[0].toLocaleString()} - ${filters.salaryRange[1].toLocaleString()}
        </div>
      </div>

      <button 
        className="clear-filters-btn"
        data-testid="clear-filters-btn"
        onClick={clearFilters}
      >
        Clear All Filters
      </button>
    </div>
  );
}

export default FiltersPanel;
