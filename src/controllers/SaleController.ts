import knex from '../database/connection';
import { Request, Response, NextFunction } from 'express';

interface Sale{
    id:number;
    products: string;
    costumer_id:number;
    seller_name:string;
    date_time:Date
}
class SaleController{

    async create(req:Request,res:Response, next:NextFunction){

        try {

            const { products, costumer_id, seller_name } = req.body;
            const productsJson = JSON.stringify(products);
            await knex('sale').insert({
                products:productsJson, 
                costumer_id,
                seller_name
            })
            return res.json({
                message_pt:"Venda criada com sucesso!",
                message:"Sale successfully created!"
            }); 

        } catch (error) {

            next(error);

        }

    }

    async index(req:Request, res:Response, next:NextFunction){

        try {
            const data = await knex('sale').orderBy('date_time');
            const reports = data.map((sale:Sale) =>{
                return {
                    ...sale,
                    products: JSON.parse(sale.products),
                }
            })
            return res.json(reports);    
        } catch (error) {
            next(error);
        }

    }

}


  export default SaleController;