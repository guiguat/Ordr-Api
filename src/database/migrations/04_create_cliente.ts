import Knex from 'knex';
export async function up(knex: Knex){
    await knex.schema.createTable('cliente', table =>{
        table.increments('id');
        table.string('nome').notNullable();
        table.string('documento').notNullable();
    });
}
export async function down(knex:Knex){
    return knex.schema.dropTable('cliente');
}