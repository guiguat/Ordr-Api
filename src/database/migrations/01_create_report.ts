import Knex from 'knex';
export async function up(knex: Knex){
    await knex.schema.createTable('report', table =>{
        table.increments('id');
        table.timestamp('dateTime').defaultTo(knex.fn.now());
        table.decimal('debit');
        table.decimal('credit');
        table.decimal('cash');
        table.decimal('total');
    });
}
export async function down(knex:Knex){
    return knex.schema.dropTable('report');
}