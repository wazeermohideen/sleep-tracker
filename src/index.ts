import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { resolve } from 'path';

const app = express(); 
const port = 3000;

app.use(express.json());

