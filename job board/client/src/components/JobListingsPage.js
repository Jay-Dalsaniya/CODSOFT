import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JobListingsPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/api/jobs')
      .then(response => setJobs(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <Link to={`/jobs/${job.id}`}>{job.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListingsPage;
