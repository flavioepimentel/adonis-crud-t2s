import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MovimentaEs extends BaseSchema {
  protected tableName = 'movimenta_es'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .enum('tipo_movimentaE', [
          'Embarque',
          'Descarga',
          'Gate In',
          'Gate Out',
          'Reposicionamento',
          'Pesagem',
          'Scanner',
        ])
        .notNullable() // [ Embarque, Descarga, Gate In, Gate Out, Reposicionamento, Pesagem, Scanner ]
      table.dateTime('data_hora_inicio').notNullable() // Hora de Inicio
      table.dateTime('data_hora_final') // Hora de Termíno
      table.integer('user_id').references('User.id').onDelete('CASCADE').notNullable() // Foreing Key => Tabela Users
      table.integer('containers_id').references('Container.id').notNullable() // Foreing Key => Tabela Containers
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
