import Knex from 'knex';
export async function up(knex: Knex){
    await knex.schema.createTable('costumer', table =>{
        table.increments('id');
        table.string('name').notNullable();
        table.string('document').notNullable().unique();
    });
}
export async function down(knex:Knex){
    return knex.schema.dropTable('costumer');
}