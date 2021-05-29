import * as mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  fromUserId: {
    type: String,
    required: true,
  },
  toUserId: {
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
