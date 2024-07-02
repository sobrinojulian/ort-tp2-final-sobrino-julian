import express from 'express'
import SondaController from '../controlador/sondaControlador.js'

class Router {
  constructor() {
    this.router = express.Router()
    this.controller = new SondaController()
  }

  start() {
    this.router.post('/sonda', this.controller.agregarSonda)
    this.router.get('/sonda', this.controller.getSondas)
    this.router.get('/sonda/:id', this.controller.getSondasById)
    this.router.get('/estadisticas', this.controller.getEstadisticas)
    return this.router
  }
}

export default Router
