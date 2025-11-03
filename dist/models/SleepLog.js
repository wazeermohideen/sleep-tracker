"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quality = exports.Sleep = void 0;
const mongoose_1 = require("mongoose");
var Quality;
(function (Quality) {
    Quality["Poor"] = "poor";
    Quality["Good"] = "good";
    Quality["Great"] = "great";
})(Quality || (exports.Quality = Quality = {}));
const SleepLogSchema = new mongoose_1.Schema({
    date: { type: Date, required: true },
    duration: { type: Number, required: true },
    quality: { type: String, enum: Object.values(Quality), required: true },
});
exports.Sleep = (0, mongoose_1.model)('SleepLog', SleepLogSchema);
