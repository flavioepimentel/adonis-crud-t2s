/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'

// ----------------- ROTAS API -----------
// ----------------------- Usuario ------------------
Route.get('/users/view', async () => {
  return Database.from('users').select('*')
})

Route.resource('users', 'UsersController')

// -------------------------- Movimentação ----------------
Route.resource('move', 'MovesController')

// Route.resource('move', 'MovesController').middleware({
//   create: ['auth'],
//   store: ['auth'],
//   destroy: ['auth'],
// })

// -------------------------------- Containers -------------------
Route.resource('container', 'ContainersController')

// Route.resource('container', 'ContainersController').middleware({
//   create: ['auth'],
//   store: ['auth'],
//   destroy: ['auth'],
// })

// ------------ ROTAS CLIENTE SIDE ----------------

Route.group(() => {
  Route.post('/login', 'SessionsController.store')
})

Route.group(() => {
  Route.post('/logout', 'SessionsController.delete')
})

Route.get('/logged', async ({ view, auth }) => {
  await auth.use('web').authenticate()
  return view.render('logged')
})

Route.get('movimentae', async ({ view }) => {
  return view.render('movimentae')
})

Route.get('/', async ({ view }) => {
  return view.render('home')
})

Route.get('/singup', async ({ view }) => {
  return view.render('singup')
})

Route.group(() => {
  Route.get('/lista/container', async ({ view }) => {
    return view.render('lista_container')
  })
  Route.get('lista/movimentae', async ({ view }) => {
    return view.render('listamovimentae')
  })
})
