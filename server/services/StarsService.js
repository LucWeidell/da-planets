import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class StarsService {
  async getAll(query = {}) {
    const stars = await dbContext.Stars.find(query)
    return stars
  }

  async getById(id) {
    const stars = await dbContext.Stars.findById(id)
    if (!stars) {
      throw new BadRequest('Invalid ID')
    }
    return stars
  }

  async create(body) {
    const stars = await dbContext.Stars.create(body)
    return stars
  }

  async edit(body) {
    const stars = await dbContext.Stars.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    if (!stars) {
      throw new BadRequest('Invalid ID')
    }
    return stars
  }

  async delete(id) {
    const stars = await dbContext.Stars.findByIdAndDelete(id)
    if (!stars) {
      throw new BadRequest('Invalid ID')
    }
    return stars
  }
}

export const starsService = new StarsService()
