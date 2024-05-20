import React, { useState } from 'react';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Resume:
        <input type="file" name="resume" onChange={handleFileChange} />
      </label>
      <button type="submit">Apply</button>
    </form>
  );
};

export default JobApplicationForm;
