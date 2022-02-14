import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { schema } from '@ioc:Adonis/Core/Validator'

const listTipoContainer = ['20', '40']
const listStatusContainer = ['Cheio', 'Vazio']
const listCategoriaContainer = ['Importacao', 'Exportacao']

export default class Container extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public containerName: string

  @column()
  public tipoContainer = schema.create({
    tipoContainer: schema.enum(listTipoContainer),
  })

  @column()
  public statusContainer = schema.create({
    statusContainer: schema.enum(listStatusContainer),
  })

  @column()
  public categoriaContainer = schema.create({
    categoriaContainer: schema.enum(listCategoriaContainer),
  })

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
