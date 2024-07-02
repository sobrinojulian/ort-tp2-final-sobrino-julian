import SondaModel from '../model/DAO/sondaModelsMemory.js'

class SondaServices {
  constructor() {
    this.model = new SondaModel()
  }

  agregarSonda = async data => {
    return await this.model.agregarSonda(data)
  }

  getSondas = async () => {
    return await this.model.getSondas()
  }

  getSondasById = async id => {
    return await this.model.getSondasById(id)
  }

  getEstadisticas = async () => {
    return await this.model.getEstadisticas()
  }
}

export default SondaServices
