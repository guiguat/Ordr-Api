import Knex from 'knex';
export async function up(knex: Knex){
    await knex.schema.createTable('sale', table =>{
        table.increments('id');
        table.text('products').notNullable();
        table.integer('table_num').notNullable();
        table.string('seller_name').notNullable();
        table.dateTime('date_time').defaultTo(knex.fn.now())
    });
}
export async function down(knex:Knex){
    return knex.schema.dropTable('sale');
}