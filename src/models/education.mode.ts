import * as mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
})

const Education = mongoose.model('Education', educationSchema)
export { Education }