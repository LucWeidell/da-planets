import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class SpeciesService {
  async getAll(query = {}) {
    const specie = await dbContext.Species.find(query)
    return specie
  }

  async getById(id) {
    const specie = await dbContext.Species.findById(id)
    if (!specie) {
      throw new BadRequest('Invalid ID')
    }
    return specie
  }

  async create(body) {
    const specie = await dbContext.Species.create(body)
    return specie
  }

  async edit(body) {
    const specie = await dbContext.Species.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    if (!specie) {
      throw new BadRequest('Invalid ID')
    }
    return specie
  }

  async delete(id) {
    const specie = await dbContext.Species.findByIdAndDelete(id)
    if (!specie) {
      throw new BadRequest('Invalid ID')
    }
    return specie
  }
}

export const speciesService = new SpeciesService()
