import mongoose, { isValidObjectId } from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const StarsPlanets = new Schema(
  {
    star_id: { type: ObjectId, ref: 'Star' },
    planets_id: [{ type: ObjectId, ref: 'Planet' }]
  }, { timestamps: true, toJSON: { virtuals: true } })

StarsPlanets.virtual('star', {
  localField: 'star_id',
  ref: 'Star',
  foreignField: '_id',
  justOne: true
})

StarsPlanets.virtual('planets', {
  localField: 'planets_id',
  ref: 'Star',
  foreignField: '_id'
})

export default StarsPlanets
