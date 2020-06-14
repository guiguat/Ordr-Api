import Knex from 'knex';
export async function up(knex: Knex){
    await knex.schema.createTable('account', table =>{
        table.increments('id');
        table.string('order').notNullable();
        table.float('price').notNullable();
        table.integer('costumer_id').notNullable();
    });
}
export async function down(knex:Knex){
    return knex.schema.dropTable('account');
}