import BaseController from '../utils/BaseController'
import { logger } from '../utils/Logger'
import { speciesPlanetsService } from '../services/SpeciesPlanetsService'

export class SpeciesPlanetsController extends BaseController {
  constructor() {
    super('api/speciesPlanets')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  /**
       * Sends all speciesPlanets to a client by request
       * @param {import('express').Request} req
       * @param {import('express').Response} res
       * @param {import('express').NextFunction} next
       */
  async getAll(req, res, next) {
    try {
      const speciesPlanet = await speciesPlanetsService.getAll(req.query)
      res.send(speciesPlanet)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Sends all speciesPlanet with Id to a client by request
       * @param {import('express').Request} req
       * @param {import('express').Response} res
       * @param {import('express').NextFunction} next
       */
  async getById(req, res, next) {
    try {
      const speciesPlanet = await speciesPlanetsService.getById(req.params.id)
      res.send(speciesPlanet)
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
      const speciesPlanet = await speciesPlanetsService.create(req.body)
      res.send(speciesPlanet)
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
      const speciesPlanet = await speciesPlanetsService.edit(req.body)
      res.send(speciesPlanet)
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
      await speciesPlanetsService.delete(req.params.id)
      res.send({ message: 'Successfully Deleted speciesPlanet' })
    } catch (error) {
      next(error)
    }
  }
}
