import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Container from 'App/Models/Container'
import { schema } from '@ioc:Adonis/Core/Validator'

const tipoMovimentaE = [
  'Embarque',
  'Descarga',
  'Gate In',
  'Gate Out',
  'Reposicionamento',
  'Pesagem',
  'Scanner',
]

export default class MovimentaE extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  // ['Embarque','Descarga','Gate In','Gate Out','Reposicionamento','Pesagem','Scanner',]
  @column()
  public tipoMove = schema.create({
    tipoMove: schema.enum(tipoMovimentaE),
  })

  @column.dateTime()
  public dataHoraInicio: DateTime

  @column.dateTime()
  public dataHoraFinal: DateTime

  // Foreing Key => User
  @hasOne(() => User, {
    foreignKey: 'authorId',
    serializeAs: 'authorId',
  })
  public static idUsuario: HasOne<typeof User>

  // Foreing Key => User
  @hasOne(() => Container, {
    foreignKey: 'containers_id',
  })
  public idContainer: HasOne<typeof Container>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
