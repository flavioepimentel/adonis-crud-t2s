import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Container from 'App/Models/Container'

export default class ContainersController {
  public async index({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const data = request.only([
      'container_name',
      'tipo_conteiner',
      'status_container',
      'categoria_container',
    ])
    const container = await Container.create({
      containerName: data.container_name,
      tipoContainer: data.tipo_conteiner,
      statusContainer: data.status_container,
      categoriaContainer: data.categoria_container,
    })
    console.log(container.$isPersisted) // true
  }

  public async show({}: HttpContextContract) {
    const container = await Container.all()

    return container
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}

module.exports = ContainersController
