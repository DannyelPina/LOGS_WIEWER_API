import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SystemLogs extends BaseSchema {
    protected tableName = 'system_logs'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id')
            table.dateTime('date_time')
            table.string('category')
            table.text('message')

            table.uuid('severity_id').references('id').inTable('log_severities')
            table.uuid('source_id').references('id').inTable('log_sources')

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
