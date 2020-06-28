import knex from '../database/connection';
import { Request, Response, NextFunction } from 'express';

class ReportController{

    async open(req:Request,res:Response, next:NextFunction){

        try {

            let debit = 0.00, credit = 0.00, cash = 0.00, total = 0.00;
            await knex('report').insert({
                debit, 
                credit,
                cash,
                total
            })
            return res.json({
                message_pt:"Relatório aberto com sucesso!",
                message:"Report successfully opened!"
            }); 

        } catch (error) {

            next(error);

        }

    }

    async index(req:Request, res:Response, next:NextFunction){

        try {
            const reports = await knex('report').orderBy('dateTime', 'desc');
            return res.json(reports);    
        } catch (error) {
            next(error);
        }

    }

    async add(req:Request, res:Response, next:NextFunction){

        try {
            let { addDebit, addCredit, addCash } = req.body;

            const [idMax] = await knex('report').max('id');
            const [data] = await knex('report').select('*').where({id:idMax['max(`id`)']});

            const {debit, credit, cash} = data;

            addCash = addCash? addCash : 0; 
            addDebit = addDebit? addDebit : 0; 
            addCredit = addCredit? addCredit : 0; 
            
            const total = parseFloat(debit+addDebit+addCredit+credit+cash+addCash).toFixed(2);

            await knex('report').where({id:idMax['max(`id`)']}).update({
                debit:parseFloat(debit+addDebit).toFixed(2),
                credit:parseFloat(credit+addCredit).toFixed(2),
                cash:parseFloat(cash+addCash).toFixed(2),
                total,
            });

            return res.json({
                message_pt:"Venda fechada com sucesso!",
                message:"Sale successfully reported!"
            });

        } catch (error) {
            next(error);
        }

    }

}
export default ReportController;