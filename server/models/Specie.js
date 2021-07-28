import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Specie = new Schema(
  {
    name: { type: String, required: true },
    plan_id: { type: String, required: true },
    speciesPlanets_id: { type: String, required: true }
  }, { timestamps: true, toJSON: { virtuals: true } }
)
// TODO right the speciesPlanets Here
Specie.virtual('speciePlanet', {
  localField: 'speciesPlanets_id',
  ref: 'SpeciesPlanets',
  foreignField: '_id',
  justOne: true
})

export default Specie
