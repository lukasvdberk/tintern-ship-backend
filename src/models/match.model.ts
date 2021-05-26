import * as mongoose from "mongoose";

const matchSchema = new mongoose.Schema({
  internId: {
    type: String,
    required: true,
  },
  companyId: {
    type: String,
    required: true,
  },
});

const Match = mongoose.model("Match", matchSchema);
export { Match };
