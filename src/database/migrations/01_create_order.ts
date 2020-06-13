import Knex from 'knex';
export async function up(knex: Knex){
    await knex.schema.createTable('order', table =>{
        table.increments('id');
        table.integer('table').notNullable();
        table.string('orders').notNullable();
        table.timestamp('dateTime').defaultTo(knex.fn.now());
    });
}
export async function down(knex:Knex){
    return knex.schema.dropTable('order');
}