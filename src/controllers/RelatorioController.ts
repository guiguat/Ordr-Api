import knex from '../database/connection';
import { Request, Response, NextFunction } from 'express';

class RelatorioController{

    async abrir(req:Request,res:Response, next:NextFunction){

        const { nome, preco, estoque, tipo } = req.body;

        try {

            let debito = 0.00, credito = 0.00, dinheiro = 0.00, total = 0.00;
            await knex('relatorio').insert({
                debito, 
                credito,
                dinheiro,
                total
            })
            const relatorios = await knex('relatorio').orderBy('dataHora', 'desc');
            return res.json(relatorios); 

        } catch (error) {

            next(error);

        }

    }

    async index(req:Request, res:Response, next:NextFunction){

        try {
            const relatorios = await knex('relatorio').orderBy('dataHora', 'desc');
            return res.json(relatorios);    
        } catch (error) {
            next(error);
        }

    }

    async add(req:Request, res:Response, next:NextFunction){

        try {
            const { addDebito, addCredito, addDinheiro } = req.body;

            const [idMax] = await knex('relatorio').max('id');
            const [data] = await knex('relatorio').select('*').where({id:idMax['max(`id`)']});

            const {debito, credito, dinheiro} = data;
            const total = parseFloat(debito+addDebito+addCredito+credito+dinheiro+addDinheiro).toFixed(2);

            await knex('relatorio').where({id:idMax['max(`id`)']}).update({
                debito:(debito+addDebito),
                credito:(credito+addCredito),
                dinheiro:(dinheiro+addDinheiro),
                total,
            });

            return res.json({message:"Venda fechada!"});

        } catch (error) {
            next(error);
        }

    }

}
export default RelatorioController;