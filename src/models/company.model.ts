import * as mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
})

const Company = mongoose.model('Company', companySchema)
export { Company }