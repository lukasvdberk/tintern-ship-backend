import * as mongoose from 'mongoose';

const internProjectSchema = new mongoose.Schema({
  educationId: {
    type: String,
    required: true
  },
  companyId: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
})

const InternProject = mongoose.model('InternProject', internProjectSchema)
export { InternProject }