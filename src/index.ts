import express, { Express } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import sleepRoute from './routes/sleep';

const app: Express = express();
const port: number = 3000;

dotenv.config();

const mongoConnectionString = process.env.mongoDB_Connection;

if (!mongoConnectionString) {
  throw new Error('Missing mongoDB_Connection environment variable');
}

mongoose.connect(mongoConnectionString).catch((error: unknown) => {
  console.error('MongoDB connection error', error);
  process.exit(1);
});

app.use(express.json());
app.use('/', sleepRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
