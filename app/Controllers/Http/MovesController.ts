import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MovimentaE from 'App/Models/MovimentaE'

export default class MovesController {
  public async index({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {
    const move = await MovimentaE.all()
    return move
  }

  public async store({ auth, request, response }: HttpContextContract) {
    const data = request.only([
      'tipo_movimentaE',
      'data_hora_inicio',
      'data_hora_final',
      'email',
      'containers_name',
    ])
    auth.verifyCredentials

    // Validando se o usuario esta logado
    if (auth.isLoggedIn === true) {
      const move = await MovimentaE.create({
        // modelVarivael: data.fromFrontend
        tipoMove: data.tipo_movimentaE,
        dataHoraInicio: data.data_hora_inicio,
        dataHoraFinal: data.data_hora_final,
      })
      console.log(move.$isPersisted) // true
    } else {
      return response.badRequest('Invalid credentials')
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
module.exports = MovesController
