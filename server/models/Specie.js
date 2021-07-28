import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Specie = new Schema(
  {
    name: { type: String, required: true },
    speciesPlanets_id: { type: String, required: true },
    plan_id: { type: String, required: true }
  }, { timestamps: true, toJSON: { virtuals: true } }
)

export default Specie
