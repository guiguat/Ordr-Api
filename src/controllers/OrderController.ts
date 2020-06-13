import knex from '../database/connection';
import { Request, Response, NextFunction } from 'express';

interface Order{
    id: number,
    name: string,
    price: number,
    stock: number,
    type: string
}

class OrderController{
    
    async create(req:Request,res:Response, next:NextFunction){

        try {

            const { table, orders, user } = req.body;
        
            orders.map(async (order:Order) => {
                if(order.type == 'dish'){
                    await knex('order').insert({
                        table,
                        orders:order.name
                    })
                }
                else if(order.type == ''){
                    await knex('employee').insert({
                        orders:order.name,
                        table,
                        user
                    })
                }
            })
            
            return res.json({ 
                message_pt: "Pedido enviado com sucesso!",
                message: "Order successfully sent!"
            });

        } catch (error) {
            next(error);
        }

    }

    async index(req:Request, res:Response, next:NextFunction){
  
        try {
            const order = await knex('order').orderBy('dateTime');
            return res.json(order);
        } catch (error) {
            next(error);
        }

    }

    async delete(req:Request, res:Response, next:NextFunction){

        try {
            const { id } = req.query;
            await knex('order').where({ id }).delete();
            res.json({
                message_pt:"Pedido(s) deletado(s) com sucesso!",
                message: "Order(s) successfully deleted!"
            });
        } catch (error) {
            next(error);
        }

    }
   
}
export default OrderController;