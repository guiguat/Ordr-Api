import Knex from 'knex';

export async function up(knex: Knex){
    await knex.schema.createTable('product', table =>{
        table.increments('id');
        table.string('name').notNullable();
        table.float('price').notNullable();
        table.integer('stock').notNullable();
        table.string('type').notNullable();
    });
}
export async function down(knex:Knex){
    return knex.schema.dropTable('product');
}