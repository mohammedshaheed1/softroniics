
// backend/index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 4000; // or any other port you prefer

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/educationDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connected successfully');
});

// Define Schema and Model (assuming you want to store education details)
const educationSchema = new mongoose.Schema({
  name: String,
  email: String,
  courses: [
    {
      courseName: String,
      university: String,
      year: Number
    }
  ]
});

const Education = mongoose.model('Education', educationSchema);

// API endpoint to handle form submission
app.post('/submit', async (req, res) => {
  try {
    const { name, email, courcename1, university1, year1, courcename2, university2, year2 } = req.body;

    // Create a new Education document
    const education = new Education({
      name,
      email,
      courses: [
        {
          courseName: courcename1,
          university: university1,
          year: year1
        },
        {
          courseName: courcename2,
          university: university2,
          year: year2
        }
      ]
    });

    // Save the education document to MongoDB
    await education.save();
    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
