import BaseController from '../utils/BaseController'
import { logger } from '../utils/Logger'
import { moonsService } from '../services/MoonsService'

export class MoonsController extends BaseController {
  constructor() {
    super('api/moons')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  /**
       * Sends all moons to a client by request
       * @param {import('express').Request} req
       * @param {import('express').Response} res
       * @param {import('express').NextFunction} next
       */
  async getAll(req, res, next) {
    try {
      const moon = await moonsService.getAll(req.query)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Sends all moon with Id to a client by request
       * @param {import('express').Request} req
       * @param {import('express').Response} res
       * @param {import('express').NextFunction} next
       */
  async getById(req, res, next) {
    try {
      const moon = await moonsService.getById(req.params.id)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Adds a data to a client by request
       * @param {import('express').Request} req
       * @param {import('express').Response} res
       * @param {import('express').NextFunction} next
       */
  async create(req, res, next) {
    try {
      const moon = await moonsService.create(req.body)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Edits data by id from a client by request
       * @param {import('express').Request} req
       * @param {import('express').Response} res
       * @param {import('express').NextFunction} next
       */
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      delete req.body.price
      const moon = await moonsService.edit(req.body)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Removes data by id from a client by request
       * @param {import('express').Request} req
       * @param {import('express').Response} res
       * @param {import('express').NextFunction} next
       */
  async delete(req, res, next) {
    try {
      await moonsService.delete(req.params.id)
      res.send({ message: 'Successfully Deleted moon' })
    } catch (error) {
      next(error)
    }
  }
}
