"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SleepLog_1 = require("../models/SleepLog");
const router = express_1.default.Router();
//Get Sleep Logs
router.get('/log-sleep', async (_req, res) => {
    try {
        const sleep = await SleepLog_1.Sleep.find();
        res.json(sleep);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching logs', error });
    }
});
//Create a Sleep Log
router.post('/log-sleep', async (req, res) => {
    try {
        const sleep = new SleepLog_1.Sleep(req.body);
        await sleep.save();
        res.status(201).json({ message: 'Log created', sleep });
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating log', error });
    }
});
exports.default = router;
