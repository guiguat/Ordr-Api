import Knex from 'knex';
export async function up(knex: Knex){
    await knex.schema.createTable('employee', table =>{
        table.increments('id');
        table.string('orders').notNullable();
        table.integer('table').notNullable();
        table.string('user').notNullable();
    });
}
export async function down(knex:Knex){
    return knex.schema.dropTable('employee');
}