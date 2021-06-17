import * as mongoose from "mongoose";

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
export { Match };
