import Knex from 'knex';
export async function up(knex: Knex){
    await knex.schema.createTable('funcionario', table =>{
        table.increments('id');
        table.string('pedidos').notNullable();
        table.integer('mesa').notNullable();
        table.string('user').notNullable();
    });
}
export async function down(knex:Knex){
    return knex.schema.dropTable('funcionario');
}