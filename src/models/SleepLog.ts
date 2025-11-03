import mongoose, { Schema, Document, model } from 'mongoose';

enum Quality {
    Poor = 'poor',
    Good = 'good',
    Great = 'great'
}

interface SleepLog extends Document {
    date: Date;
    duration: number;
    quality: Quality;
}

const SleepLogSchema: Schema = new Schema <SleepLog>({
    date: {type: Date, required: true},
    duration: { type: Number, required: true },
    quality: { type: String, enum: Object.values(Quality), required: true },
});

export const Sleep = model<SleepLog>('SleepLog', SleepLogSchema);
export { SleepLog, Quality};