import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Containers extends BaseSchema {
  protected tableName = 'containers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('container_name', 11).notNullable() // TEST1234567
      table.enum('tipo_container', ['20', '40']).notNullable() // 20/40
      table.enum('status_container', ['Cheio', 'Vazio', 'Inutilizado', 'Perdido']).notNullable() // Cheio/Vazio
      table.enum('categoria_container', ['Importacao', 'Exportacao']).notNullable() // Importação/Exportação
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
