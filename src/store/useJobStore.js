import { create } from 'zustand';
import mockData from '../data/mock-data.json';

const useJobStore = create((set, get) => ({
  jobs: mockData.jobs,
  companies: mockData.companies,
  filters: {
    jobType: '',
    experienceLevel: '',
    skills: [],
    salaryRange: [0, 200000],
    searchQuery: ''
  },
  sortBy: 'date',
  viewMode: 'grid',
  currentPage: 1,
  itemsPerPage: 10,
  bookmarkedJobs: JSON.parse(localStorage.getItem('bookmarkedJobs') || '[]'),

  setFilter: (filterName, value) => set((state) => ({
    filters: { ...state.filters, [filterName]: value },
    currentPage: 1
  })),

  clearFilters: () => set({
    filters: {
      jobType: '',
      experienceLevel: '',
      skills: [],
      salaryRange: [0, 200000],
      searchQuery: ''
    },
    currentPage: 1
  }),

  setSortBy: (sortBy) => set({ sortBy, currentPage: 1 }),

  setViewMode: (viewMode) => set({ viewMode }),

  setCurrentPage: (page) => set({ currentPage: page }),

  toggleBookmark: (jobId) => set((state) => {
    const bookmarked = [...state.bookmarkedJobs];
    const index = bookmarked.indexOf(jobId);
    
    if (index > -1) {
      bookmarked.splice(index, 1);
    } else {
      bookmarked.push(jobId);
    }
    
    localStorage.setItem('bookmarkedJobs', JSON.stringify(bookmarked));
    return { bookmarkedJobs: bookmarked };
  }),

  getFilteredJobs: () => {
    const state = get();
    let filtered = [...state.jobs];

    if (state.filters.jobType) {
      filtered = filtered.filter(job => job.jobType === state.filters.jobType);
    }

    if (state.filters.experienceLevel) {
      filtered = filtered.filter(job => job.experienceLevel === state.filters.experienceLevel);
    }

    if (state.filters.skills.length > 0) {
      filtered = filtered.filter(job => 
        state.filters.skills.every(skill => job.skills.includes(skill))
      );
    }

    filtered = filtered.filter(job => 
      job.salary >= state.filters.salaryRange[0] && 
      job.salary <= state.filters.salaryRange[1]
    );

    if (state.filters.searchQuery) {
      const query = state.filters.searchQuery.toLowerCase();
      filtered = filtered.filter(job => {
        const company = state.companies.find(c => c.id === job.companyId);
        return job.title.toLowerCase().includes(query) || 
               (company && company.name.toLowerCase().includes(query));
      });
    }

    if (state.sortBy === 'salary-desc') {
      filtered.sort((a, b) => b.salary - a.salary);
    } else if (state.sortBy === 'salary-asc') {
      filtered.sort((a, b) => a.salary - b.salary);
    } else {
      filtered.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
    }

    return filtered;
  },

  getPaginatedJobs: () => {
    const state = get();
    const filtered = state.getFilteredJobs();
    const start = (state.currentPage - 1) * state.itemsPerPage;
    const end = start + state.itemsPerPage;
    return filtered.slice(start, end);
  },

  getTotalPages: () => {
    const state = get();
    const filtered = state.getFilteredJobs();
    return Math.ceil(filtered.length / state.itemsPerPage);
  }
}));

export default useJobStore;
