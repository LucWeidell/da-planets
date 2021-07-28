import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class PlanetsService {
  async getAll(query = {}) {
    const planet = await dbContext.Planets.find(query)
    return planet
  }

  async getById(id) {
    const planet = await dbContext.Planets.findById(id)
    if (!planet) {
      throw new BadRequest('Invalid ID')
    }
    return planet
  }

  async create(body) {
    const planet = await dbContext.Planets.create(body)
    return planet
  }

  async edit(body) {
    const planet = await dbContext.Planets.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    if (!planet) {
      throw new BadRequest('Invalid ID')
    }
    return planet
  }

  async delete(id) {
    const planet = await dbContext.Planets.findByIdAndDelete(id)
    if (!planet) {
      throw new BadRequest('Invalid ID')
    }
    return planet
  }
}

export const planetsService = new PlanetsService()
