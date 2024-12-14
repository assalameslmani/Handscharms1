import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL;

async function connectedToDatabase() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('connected to database');
  } catch (error) {
    console.log('error', error);
  }
}

export default connectedToDatabase;
