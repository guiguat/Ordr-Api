import Knex from 'knex';
export async function up(knex: Knex){
    await knex.schema.createTable('contas', table =>{
        table.increments('id');
        table.string('pedido').notNullable();
        table.float('preco').notNullable();
        table.string('cliente').notNullable();
    });
}
export async function down(knex:Knex){
    return knex.schema.dropTable('contas');
}