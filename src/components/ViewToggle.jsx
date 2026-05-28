import React from 'react';
import useJobStore from '../store/useJobStore';

function ViewToggle() {
  const { viewMode, setViewMode } = useJobStore();

  return (
    <div className="view-toggle">
      <button
        className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
        onClick={() => setViewMode('grid')}
        data-testid="grid-view-btn"
      >
        Grid
      </button>
      <button
        className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
        onClick={() => setViewMode('list')}
        data-testid="list-view-btn"
      >
        List
      </button>
    </div>
  );
}

export default ViewToggle;
