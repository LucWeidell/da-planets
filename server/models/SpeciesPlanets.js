import mongoose from 'mongoose'
const Schema = mongoose.Schema

const SpeciesPlanets = new Schema(
  {
    species_id: { type: String, required: true },
    planets_id: [{ type: String, required: true }]
  }, { timestamps: true, toJSON: { virtuals: true } })
export default SpeciesPlanets
