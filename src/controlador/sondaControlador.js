import SondaServices from '../servicio/sondaService.js'

const ERROR_INTERNAL_SERVER = 'Internal server error.'

class SondaController {
  constructor() {
    this.services = new SondaServices()
  }

  agregarSonda = async (req, res) => {
    try {
      const data = req.body
      const dato = await this.services.agregarSonda(data)
      res.send(dato)
    } catch (error) {
      res.status(500).send({ errorMsg: ERROR_INTERNAL_SERVER })
    }
  }

  getSondas = async (req, res) => {
    try {
      const datos = await this.services.getSondas()
      res.send(datos)
    } catch (error) {
      res.status(500).send({ errorMsg: ERROR_INTERNAL_SERVER })
    }
  }

  getSondasById = async (req, res) => {
    try {
      const { id } = req.params
      const datos = await this.services.getSondasById(id)
      res.send(datos)
    } catch (error) {
      res.status(500).send({ errorMsg: ERROR_INTERNAL_SERVER })
    }
  }

  getEstadisticas = async (req, res) => {
    try {
      const estadisticas = await this.services.getEstadisticas()
      res.send(estadisticas)
    } catch (error) {
      res.status(500).send({ errorMsg: ERROR_INTERNAL_SERVER })
    }
  }
}

export default SondaController
