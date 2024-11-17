import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Define the schema for the job
const jobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    name: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: false,
    },
  },
  location: {
    city: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    remote: {
      type: Boolean,
      required: false,
    },
  },
  salary: {
    currency: {
      type: String,
      required: false,
    },
    range: {
      min: {
        type: Number,
        required: false,
      },
      max: {
        type: Number,
        required: false,
      },
    },
    period: {
      type: String,
      enum: ['yearly', 'monthly', 'weekly', 'hourly'],
      required: false,
    },
  },
  jobType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship'],
    required: true,
  },
  experienceLevel: {
    type: String,
    enum: ['Entry', 'Mid', 'Senior'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: [String],
    required: false,
  },
  requirements: {
    type: [String],
    required: false,
  },
  benefits: {
    type: [String],
    required: false,
  },
  skills: {
    type: [String],
    required: false,
  },
  applicationProcess: {
    link: {
      type: String,
      required: false,
    },
    contactEmail: {
      type: String,
      required: false,
    },
  },
  deadline: {
    type: Date,
    required: false,
  },
});

// Create and export the Job model
const JobModel = model('Job', jobSchema);

export default JobModel; // Export the model as default
