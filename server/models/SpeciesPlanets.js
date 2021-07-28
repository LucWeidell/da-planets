import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const SpeciesPlanets = new Schema(
  {
    species_id: { type: ObjectId, ref: 'Specie' },
    planets_id: [{ type: ObjectId, ref: 'Planet' }]
  }, { timestamps: true, toJSON: { virtuals: true } })

SpeciesPlanets.virtual('specie', {
  localField: 'species_id',
  ref: 'Specie',
  foreignField: '_id',
  justOne: true
})

SpeciesPlanets.virtual('planets', {
  localField: 'planets_id',
  ref: 'Planet',
  foreignField: '_id'
})

export default SpeciesPlanets
