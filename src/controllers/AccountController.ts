import knex from '../database/connection';
import { Request, Response, NextFunction } from 'express';

interface Product{
    name:string,
    price:number
}

class AccountController{

    async index(req:Request, res:Response, next:NextFunction){

        try {

            const costumer = req.query.costumer_id;
            
            const orders = await knex('account').where({costumer}).select('*');
            
            res.json(orders);

        } catch (error) {
            next(error);
        }

    }

    async create(req:Request, res:Response, next:NextFunction){

        try {
            const { products, costumer_id } = req.body;
            products.map(async (product:Product) => {

                await knex('account').insert({
                    order:product.name,
                    price:product.price,
                    costumer:costumer_id
                })

            })
            return res.json({
                message_pt:"Pedido(s) enviado(s) com sucesso!",
                message:"Order(s) successfully sent!"
            });
        } catch (error) {
            next(error);
        }

    }

    async delete(req:Request, res:Response, next:NextFunction){

        try {

            const costumer = req.query.costumer;
        
            await knex('account').where({ costumer }).delete();
        
            return res.json({
                message_pt:"Pedido(s) deletado(s) com sucesso!",
                message:"Order(s) successfully deleted!"
            });

        } catch (error) {
            next(error);
        }

    }
   
}
export default AccountController;