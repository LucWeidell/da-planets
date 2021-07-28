import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class GalaxysService {
  async getAll(query = {}) {
    const galaxys = await dbContext.Galaxys.find(query)
    return galaxys
  }

  async getById(id) {
    const galaxy = await dbContext.Galaxys.findOne(id)
    if (!galaxy) {
      throw new BadRequest('Invalid Id!')
    }
    return galaxy
  }

  async create(body) {
    const galaxy = await dbContext.Galaxys.create(body)
    return galaxy
  }

  async edit(body) {
    await this.getById(body.id)
    const galaxy = await dbContext.Galaxys.findByIdAndUpdate(body.id, body, { runValidators: true })
    return galaxy
  }

  async remove(id) {
    await this.getById(id)
    return await dbContext.Galaxys.findByIdAndDelete(id)
  }
}
export const galaxyService = new GalaxysService()
