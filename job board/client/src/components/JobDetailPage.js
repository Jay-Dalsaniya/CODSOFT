import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const JobDetailPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    axios.get(`/api/jobs/${id}`)
      .then(response => setJob(response.data))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      {/* Add more job details */}
    </div>
  );
};

export default JobDetailPage;
