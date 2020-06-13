import Knex from 'knex';
export async function up(knex: Knex){
    await knex.schema.createTable('pedido', table =>{
        table.increments('id');
        table.integer('mesa').notNullable();
        table.string('pedidos').notNullable();
        table.timestamp('dataHora').defaultTo(knex.fn.now());
    });
}
export async function down(knex:Knex){
    return knex.schema.dropTable('pedido');
}