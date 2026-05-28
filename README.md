# Job Board Application

A modern, feature-rich job board application built with React, featuring advanced filtering, searching, sorting, and bookmarking capabilities.

## Features

- **Advanced Filtering**: Filter jobs by type (Remote/Hybrid/Onsite), experience level, skills (multi-select), and salary range
- **Search**: Real-time search with debouncing by job title or company name
- **Sorting**: Sort jobs by date or salary (ascending/descending)
- **View Modes**: Toggle between grid and list layouts
- **Bookmarking**: Save favorite jobs with localStorage persistence
- **Application Tracker**: Dedicated page to view all bookmarked jobs
- **Pagination**: Client-side pagination for easy navigation
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **React 18** - UI library
- **React Router** - Client-side routing
- **Zustand** - State management
- **react-select** - Multi-select component for skills filtering
- **rc-slider** - Range slider for salary filtering
- **Vite** - Build tool and dev server
- **Docker** - Containerization
- **Nginx** - Production web server

## Prerequisites

- Docker and Docker Compose installed on your system
- OR Node.js 18+ and npm for local development

## Quick Start with Docker

1. Clone the repository:
```bash
git clone <repository-url>
cd job-board
```

2. Build and run with Docker Compose:
```bash
docker-compose up --build
```

3. Access the application:
Open your browser and navigate to `http://localhost:3000`

4. Stop the application:
```bash
docker-compose down
```

## Local Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
job-board/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── FiltersPanel.jsx
│   │   ├── JobCard.jsx
│   │   ├── Pagination.jsx
│   │   ├── SearchBar.jsx
│   │   ├── SortDropdown.jsx
│   │   └── ViewToggle.jsx
│   ├── pages/           # Page components
│   │   ├── JobListings.jsx
│   │   └── Tracker.jsx
│   ├── store/           # State management
│   │   └── useJobStore.js
│   ├── hooks/           # Custom React hooks
│   │   └── useDebounce.js
│   ├── data/            # Mock data
│   │   └── mock-data.json
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose configuration
├── nginx.conf           # Nginx configuration
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## Usage Guide

### Filtering Jobs

- **Job Type**: Select Remote, Hybrid, or Onsite using radio buttons
- **Experience Level**: Choose from Internship, Junior, Mid, or Senior
- **Skills**: Use the multi-select dropdown to filter by multiple skills (jobs must have ALL selected skills)
- **Salary Range**: Adjust the slider to set minimum and maximum salary

### Searching

Type in the search bar to filter jobs by title or company name. The search is debounced for better performance.

### Sorting

Use the sort dropdown to order jobs by:
- Date (newest first)
- Salary (high to low)
- Salary (low to high)

### View Modes

Toggle between grid and list views using the buttons in the header.

### Bookmarking

Click the star icon on any job card to bookmark it. Bookmarked jobs are saved to localStorage and persist across sessions.

### Application Tracker

Navigate to the "Application Tracker" page to see all your bookmarked jobs in one place.

### Clear Filters

Click the "Clear All Filters" button to reset all filters and show all jobs.

## Mock Data

The application uses a local JSON file (`src/data/mock-data.json`) containing 22 job listings and 10 companies. This simulates an API without requiring a backend.

## Environment Variables

This application does not require any environment variables. All configuration is handled through the mock data file.

## Docker Configuration

The application uses a multi-stage Docker build:

1. **Build Stage**: Uses Node.js to install dependencies and build the React app
2. **Production Stage**: Uses Nginx Alpine to serve the static files

The container includes a health check that verifies the application is running correctly.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Debounced search input (300ms delay)
- Client-side pagination to limit rendered items
- Efficient state management with Zustand
- Optimized re-renders with React best practices

## Accessibility

- Semantic HTML elements
- Keyboard navigation support
- ARIA labels where appropriate
- Form elements properly associated with labels

## License

MIT

## Support

For issues or questions, please open an issue in the repository.
