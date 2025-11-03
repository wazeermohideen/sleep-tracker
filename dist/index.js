"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const sleep_1 = __importDefault(require("./routes/sleep"));
const app = (0, express_1.default)();
const port = 3000;
dotenv_1.default.config();
const mongoConnectionString = process.env.mongoDB_Connection;
if (!mongoConnectionString) {
    throw new Error('Missing mongoDB_Connection environment variable');
}
mongoose_1.default.connect(mongoConnectionString).catch((error) => {
    console.error('MongoDB connection error', error);
    process.exit(1);
});
app.use(express_1.default.json());
app.use('/', sleep_1.default);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
