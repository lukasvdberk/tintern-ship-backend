import * as mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  hasLiked: {
    type: Boolean,
    required: true,
  },
});

const Like = mongoose.model("Like", likeSchema);
export { Like };
