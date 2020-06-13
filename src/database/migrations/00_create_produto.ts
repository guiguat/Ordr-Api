import Knex from 'knex';

export async function up(knex: Knex){
    await knex.schema.createTable('produto', table =>{
        table.increments('id');
        table.string('nome').notNullable();
        table.float('preco').notNullable();
        table.integer('estoque').notNullable();
        table.string('tipo').notNullable();
    });
}
export async function down(knex:Knex){
    return knex.schema.dropTable('produto');
}