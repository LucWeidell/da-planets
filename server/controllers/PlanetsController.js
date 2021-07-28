import BaseController from '../utils/BaseController'
import { logger } from '../utils/Logger'
import { planetsService } from '../services/PlanetsService'

    export class PlanetsController extends BaseController {
      constructor() {
        super('api/planets')
        this.router
          .get('', this.getAll)
          .get('/:id', this.getById)
          .post('', this.create)
          .put('/:id', this.edit)
          .delete('/:id', this.delete)
      }

      /**
       * Sends all planets to a client by request
       * @param {import('express').Request} req
       * @param {import('express').Response} res
       * @param {import('express').NextFunction} next
       */
      async getAll(req, res, next) {
        try {
          const planet = await planetsService.getAll(req.query)
          res.send(planet)
        } catch (error) {
          next(error)
        }
      }

      /**
       * Sends all planet with Id to a client by request
       * @param {import('express').Request} req
       * @param {import('express').Response} res
       * @param {import('express').NextFunction} next
       */
      async getById(req, res, next) {
        try {
          const planet = await planetsService.getById(req.params.id)
          res.send(planet)
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
          const planet = await planetsService.create(req.body)
          res.send(planet)
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
          const planet = await planetsService.edit(req.body)
          res.send(planet)
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
          await planetsService.delete(req.params.id)
          res.send({ message: 'Successfully Deleted planet' })
        } catch (error) {
          next(error)
        }
      }