import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class SpeciesPlanetsService {
  async getAll(query = {}) {
    const speciesPlantes = await dbContext.SpeciesPlanets.find(query)
    return speciesPlantes
  }

  async getById(id) {
    const speciesPlantes = await dbContext.SpeciesPlanets.findById(id)
    if (!speciesPlantes) {
      throw new BadRequest('Invalid ID')
    }
    return speciesPlantes
  }

  async create(body) {
    const speciesPlantes = await dbContext.SpeciesPlanets.create(body)
    return speciesPlantes
  }

  async edit(body) {
    const speciesPlantes = await dbContext.SpeciesPlanets.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    if (!speciesPlantes) {
      throw new BadRequest('Invalid ID')
    }
    return speciesPlantes
  }

  async delete(id) {
    const speciesPlantes = await dbContext.SpeciesPlanets.findByIdAndDelete(id)
    if (!speciesPlantes) {
      throw new BadRequest('Invalid ID')
    }
    return speciesPlantes
  }
}

export const speciesPlanetsService = new SpeciesPlanetsService()
