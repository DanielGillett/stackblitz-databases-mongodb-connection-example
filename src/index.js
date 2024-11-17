import express from 'express';
import { connectToDatabase } from './db/database.mjs';
import JobModel from './models/job.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
connectToDatabase();

// Routes
app.post('/jobs', async (req, res) => {
  try {
    const job = new JobModel(req.body);
    await job.save();
    res.status(201).send(job);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get('/jobs', async (req, res) => {
  try {
    const jobs = await JobModel.find({});
    res.send(jobs);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/jobs/:id', async (req, res) => {
  try {
    const job = await JobModel.findById(req.params.id);
    if (!job) {
      return res.status(404).send('Job not found');
    }
    res.send(job);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
