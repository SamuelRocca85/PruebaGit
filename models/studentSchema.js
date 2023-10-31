import moongose, { Schema } from 'mongoose'

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
})

const Student = moongose.model('Student', StudentSchema)

export default Student
