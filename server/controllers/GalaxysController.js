import { galaxyService } from '../services/GalaxysService'
import BaseController from '../utils/BaseController'

export class GalaxysController extends BaseController {
  constructor() {
    super('api/galaxys')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.remove)
  }

  /**
   * Sends found values to a client by request
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getAll(req, res, next) {
    try {
      const galaxys = await galaxyService.getAll()
      res.send(galaxys)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Sends found values to a client by request
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getById(req, res, next) {
    try {
      const galaxy = await galaxyService.getById(req.params.id)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Sends found values to a client by request
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async create(req, res, next) {
    try {
      const galaxy = await galaxyService.create(req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Sends found values to a client by request
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const galaxy = await galaxyService.edit(req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Sends found values to a client by request
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async remove(req, res, next) {
    try {
      const galaxy = await galaxyService.remove(req.params.id)
      res.send({ message: 'deleted galaxy Success' })
    } catch (error) {
      next(error)
    }
  }
}
