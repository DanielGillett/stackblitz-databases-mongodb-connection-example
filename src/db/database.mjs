import 'dotenv/config';
import config from 'config';
import mongoose from 'mongoose';

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

const dbConfig = config.get('db');

const connectionString = `mongodb+srv://${encodeURIComponent(
  dbUsername
)}:${encodeURIComponent(dbPassword)}@${dbConfig.cluster}/?${dbConfig.options}`;

export async function connectToDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Successfully connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}
