import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Star = new Schema(
  {
    name: { type: String, required: true },
    gal_id: { type: String, required: true }
  }, { timestamps: true, toJSON: { virtuals: true } }
)

export default Star
