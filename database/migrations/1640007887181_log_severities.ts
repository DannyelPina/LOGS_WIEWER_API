import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class LogSeverities extends BaseSchema {
    protected tableName = 'log_severities'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id')
            table.string('name')
            table.integer('display_order')

            /**
             * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
             */
            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
