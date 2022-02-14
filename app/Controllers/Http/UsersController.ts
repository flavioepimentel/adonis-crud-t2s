import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
    const user = await User.all()
    return user
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['username', 'email', 'password'])
    const user = await User.create({
      username: data.username,
      email: data.email,
      password: data.password,
    })
    console.log(user.$isPersisted) // true
  }

  public async show({}: HttpContextContract) {
    const user = await User.all()
    return user
  }

  public async edit({}: HttpContextContract) {}

  public async update({ request, response, params }: HttpContextContract) {
    request.only(['email', 'username'])
    const user = await User.find(params.id)
    if (!user) {
      response.status(404).send({ message: 'User not find' })
    } else {
      user.save()
      response.send('Usuario atualizado')
    }
  }

  public async destroy({ request, response, params }: HttpContextContract) {
    request.only(['email'])
    const user = await User.find(params.id)
    if (!user) {
      response.status(404).send({ message: 'User not find' })
    } else {
      user.delete()
      response.send('Ususario deletado')
    }
  }

  // public async login({ auth, request, response }: HttpContextContract) {
  //   const email = await request.input('email')
  //   const pass = await request.input('password')
  //   try {
  //     await auth.use('web').attempt(email, pass)
  //     return response.redirect().toRoute('container')
  //   } catch (error) {
  //     return response.status(500).send({ error: error })
  //   }
  // }
}

module.exports = UsersController
