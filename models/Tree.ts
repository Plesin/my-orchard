import mongoose from 'mongoose'

const TreeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  orcharedId: {
    type: String,
  },
  type: {
    type: String,
  },
  subtype: {
    type: String,
  },
  created: {
    type: String,
  },
  modified: {
    type: String,
  },
  datePlanted: {
    type: String,
  },
})

export default mongoose.models.Tree || mongoose.model('Tree', TreeSchema)
