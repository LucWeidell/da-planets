import BaseController from '../utils/BaseController'
import { logger } from '../utils/Logger'
import { starsPlanetsService } from '../services/StarsPlanetsService'

export class StarsPlanetsController extends BaseController {
  constructor() {
    super('api/starsPlanets')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  /**
       * Sends all starsPlanets to a client by request
       * @param {import('express').Request} req
       * @param {import('express').Response} res
       * @param {import('express').NextFunction} next
       */
  async getAll(req, res, next) {
    try {
      const starsPlanet = await starsPlanetsService.getAll(req.query)
      res.send(starsPlanet)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Sends all starsPlanet with Id to a client by request
       * @param {import('express').Request} req
       * @param {import('express').Response} res
       * @param {import('express').NextFunction} next
       */
  async getById(req, res, next) {
    try {
      const starsPlanet = await starsPlanetsService.getById(req.params.id)
      res.send(starsPlanet)
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
      const starsPlanet = await starsPlanetsService.create(req.body)
      res.send(starsPlanet)
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
      const starsPlanet = await starsPlanetsService.edit(req.body)
      res.send(starsPlanet)
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
      await starsPlanetsService.delete(req.params.id)
      res.send({ message: 'Successfully Deleted starsPlanet' })
    } catch (error) {
      next(error)
    }
  }
}
