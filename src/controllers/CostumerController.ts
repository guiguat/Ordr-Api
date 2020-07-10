import knex from '../database/connection';
import { Request, Response, NextFunction } from 'express';

class CostumerController{

    async index(req:Request, res:Response, next:NextFunction){

        try {

            const costumer = await knex('costumer').select('*');

            res.json(costumer);

        } catch (error) {
            next(error);
        }

    }

    async create(req:Request, res:Response, next:NextFunction){

        try {
            const { name, document } = req.body;
            
            await knex('costumer').insert({
                name, 
                document
            })
            
            return res.json({
                message_pt:"Cadastro concluido!",
                message:"Registration completed!"
            });

        } catch (error) {
            next(error);
        }

    }

    async edit(req:Request, res:Response, next:NextFunction){

        try {

            const { id, name, document } = req.body;

            await knex('costumer').where({id}).update({
                name,
                document
            })

            return res.json({
                message_pt:"Informações do cliente alteradas com sucesso!",
                message:"Costumer's data successfully changed!"
            });

        } catch (error) {
            next(error);
        }

    }

    async delete(req:Request, res:Response, next:NextFunction){

        try {
            const id  = req.query.id;

            //delete accounts data associated with that costumer
            await knex('account').where({ costumer_id:id }).delete();

            await knex('costumer').where({id}).delete();

            return res.json({
                message_pt:"Cliente(s) deletado(s) com sucesso!",
                message:"Costumer(s) successfully deleted!"
            });

        } catch (error) {
            next(error);
        }

    }
   
}
export default CostumerController;