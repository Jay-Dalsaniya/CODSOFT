const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Routes
const jobRoutes = require('./routes/jobRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);

// Catch all other routes and return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
