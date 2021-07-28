import mongoose from 'mongoose'
const Schema = mongoose.Schema

const StarsPlanets = new Schema(
  {
    star_id: { type: String, required: true },
    planets_id: [{ type: String, default: '' }]
  }, { timestamps: true, toJSON: { virtuals: true } })

export default StarsPlanets
