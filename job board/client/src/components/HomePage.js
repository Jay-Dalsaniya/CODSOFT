import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Job Board</h1>
      <h2>Featured Job Listings</h2>
      {/* Add code to fetch and display featured job listings */}
      <Link to="/jobs">View All Jobs</Link>
    </div>
  );
};

export default HomePage;
