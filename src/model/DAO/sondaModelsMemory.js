class SondaModel {
  constructor() {
    this.datos = []
  }

  agregarSonda = async data => {
    try {
      if (!this.isValidData(data)) {
        return 'Datos no válidos'
      }

      data.fechaHora = new Date()
      this.datos.push(data)
      return data
    } catch (error) {
      return 'Ocurrió un error al intentar agregar la sonda'
    }
  }

  getSondas = async () => {
    try {
      return this.datos
    } catch (error) {
      return 'Ocurrió un error al intentar obtener las sondas'
    }
  }

  getSondasById = async id => {
    try {
      if (!this.isValidId(id)) {
        return 'Número de sonda incorrecto'
      }

      const datos = this.datos.filter(d => d.id === id)
      if (datos.length > 0) {
        return datos
      } else {
        return `No se encontraron datos para la sonda con ID ${id}`
      }
    } catch (error) {
      return 'Ocurrió un error al intentar obtener la sonda por ID'
    }
  }

  getEstadisticas = async () => {
    const stats = {
      estadisticas: {
        cantidadTotalMuestras: this.datos.length,
        temperaturaSondas: {}
      }
    }

    for (let index = 1; index <= 5; index++) {
      const sondaTemperaturas = this.datos.filter(temp => temp.id === index)
      const total = sondaTemperaturas.length
      const prom = total
        ? sondaTemperaturas.reduce((sum, temp) => sum + temp.temperatura, 0) /
          total
        : 0
      stats.estadisticas.temperaturaSondas[index] = {
        cantidad: total,
        promedio: prom
      }
    }

    return stats
  }

  isValidData = data => {
    return (
      data.id >= 1 &&
      data.id <= 5 &&
      data.temperatura >= -20 &&
      data.temperatura <= 100
    )
  }

  isValidId = id => {
    return id >= 1 && id <= 5
  }
}

export default SondaModel
