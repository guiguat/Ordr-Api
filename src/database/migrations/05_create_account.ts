import Knex from 'knex';
export async function up(knex: Knex){
    await knex.schema.createTable('account', table =>{
        table.increments('id');
        table.string('order').notNullable();
        table.float('price').notNullable();
        table.string('costumer').notNullable();
    });
}
export async function down(knex:Knex){
    return knex.schema.dropTable('account');
}