import mongoose from 'mongoose'

const OrchardSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  desc: {
    type: String,
  },
  created: {
    type: String,
  },
  modified: {
    type: String,
  },
})

export default mongoose.models.Orchard ||
  mongoose.model('Orchard', OrchardSchema)
