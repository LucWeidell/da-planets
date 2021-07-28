import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Star = new Schema(
  {
    name: { type: String, required: true },
    gal_id: { type: String, required: true },
    starPlanets_id: { type: String, require: true }
  }, { timestamps: true, toJSON: { virtuals: true } }
)
// Need virtual for StarPlanets Here
Star.virtual('starPlanet', {
  localField: 'starPlanets_id',
  ref: 'StarsPlanets',
  foreignField: '_id',
  justOne: true
})

export default Star
