import Knex from 'knex';
export async function up(knex: Knex){
    await knex.schema.createTable('relatorio', table =>{
        table.increments('id');
        table.timestamp('dataHora').defaultTo(knex.fn.now());
        table.decimal('debito');
        table.decimal('credito');
        table.decimal('dinheiro');
        table.decimal('total');
    });
}
export async function down(knex:Knex){
    return knex.schema.dropTable('relatorio');
}