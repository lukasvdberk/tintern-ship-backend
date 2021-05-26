import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  matches: [ {
    type: Object,
    require: true,
    unique: false
  }],
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatarUrl: {
    type: String,
    required: true
  }
})

const User = mongoose.model('User', userSchema)
export { User }