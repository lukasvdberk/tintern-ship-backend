import * as mongoose from "mongoose";

const internSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  educationId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const Intern = mongoose.model("Intern", internSchema);
export { Intern };
