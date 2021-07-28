import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class MoonsService {
  async getAll(query = {}) {
    const moon = await dbContext.Moons.find(query)
    return moon
  }

  async getById(id) {
    const moon = await dbContext.Moons.findById(id)
    if (!moon) {
      throw new BadRequest('Invalid ID')
    }
    return moon
  }

  async create(body) {
    const moon = await dbContext.Moons.create(body)
    return moon
  }

  async edit(body) {
    const moon = await dbContext.Moons.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    if (!moon) {
      throw new BadRequest('Invalid ID')
    }
    return moon
  }

  async delete(id) {
    const moon = await dbContext.Moons.findByIdAndDelete(id)
    if (!moon) {
      throw new BadRequest('Invalid ID')
    }
    return moon
  }
}

export const moonsService = new MoonsService()
