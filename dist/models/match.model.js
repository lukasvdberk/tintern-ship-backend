"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
const mongoose = require("mongoose");
const matchSchema = new mongoose.Schema({
    firstUserId: {
        type: String,
        required: true,
    },
    secondUserId: {
        type: String,
        required: true,
    },
});
const Match = mongoose.model("Match", matchSchema);
exports.Match = Match;
//# sourceMappingURL=match.model.js.map