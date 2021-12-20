import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SystemLogAttributes extends BaseSchema {
    protected tableName = 'system_log_attributes'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id')
            table.string('key')
            table.string('value')

            table.uuid('system_logs_id').references('id').inTable('system_logs')
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
