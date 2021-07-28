import ValueSchema from '../models/Value'
import mongoose from 'mongoose'
import GalaxySchema from '../models/Galaxy'
import StarSchema from '../models/Star'
import PlanetSchema from '../models/Planet'
import MoonSchema from '../models/Moon'
import SpecieSchema from '../models/Specie'
import StarsPlanetsSchema from '../models/StarsPlanets'
import SpeciesPlanetsSchema from '../models/SpeciesPlanets'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Galaxys = mongoose.model('Galaxy', GalaxySchema)
  Stars = mongoose.model('Star', StarSchema)
  Planets = mongoose.model('Planet', PlanetSchema)
  Moons = mongoose.model('Moon', MoonSchema)
  Species = mongoose.model('Specie', SpecieSchema)
  StarsPlanets = mongoose.model('StarsPlanets', StarsPlanetsSchema)
  SpeciesPlanets = mongoose.model('SpeciesPlanets', SpeciesPlanetsSchema)
}

export const dbContext = new DbContext()
