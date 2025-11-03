import express, { Router, Request, Response } from 'express';
import { Quality, SleepLog, Sleep } from '../models/SleepLog';

const router: Router = express.Router();

interface CreateSleepRequests {
    date: Date;
    duration: number;
    quality: Quality;
}

//Get Sleep Logs
router.get('/log-sleep', async (_req: Request, res: Response) => {
    try {
        const sleep: SleepLog[] = await Sleep.find();
        res.json(sleep);
    }
    catch (error){
        res.status(500).json({message: 'Error fetching logs', error});
    }
});

//Create a Sleep Log
router.post('/log-sleep', async (req: Request<{}, {}, CreateSleepRequests>, res: Response) => {
    try{
        const sleep = new Sleep(req.body);
        await sleep.save();
        res.status(201).json({ message: 'Log created', sleep });
    }
    catch (error){
         res.status(400).json({ message: 'Error creating log', error });
    }
})

export default router;