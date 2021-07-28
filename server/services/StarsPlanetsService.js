import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class StarsPlanetsService {
  async getAll(query = {}) {
    const starsPlanet = await dbContext.StarsPlanets.find(query)
    return starsPlanet
  }

  async getById(id) {
    const starsPlanet = await dbContext.StarsPlanets.findById(id)
    if (!starsPlanet) {
      throw new BadRequest('Invalid ID')
    }
    return starsPlanet
  }

  async create(body) {
    const starsPlanet = await dbContext.StarsPlanets.create(body)
    return starsPlanet
  }

  async edit(body) {
    const starsPlanet = await dbContext.StarsPlanets.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    if (!starsPlanet) {
      throw new BadRequest('Invalid ID')
    }
    return starsPlanet
  }

  async delete(id) {
    const starsPlanet = await dbContext.StarsPlanets.findByIdAndDelete(id)
    if (!starsPlanet) {
      throw new BadRequest('Invalid ID')
    }
    return starsPlanet
  }
}

export const starsPlanetsService = new StarsPlanetsService()
