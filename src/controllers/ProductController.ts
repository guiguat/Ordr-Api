import knex from '../database/connection';
import { Request, Response, NextFunction } from 'express';
class ProductController{

   async create(req:Request,res:Response, next:NextFunction){

      const { name, price, stock, type } = req.body;
      try {
         
         await knex('product').insert({
            name, 
            price,
            stock,
            type
         })

         return res.json({
            message_pt: "Produto cadastrado com sucesso!",
            message: "Product successfully created!"
         });
      } catch (error) {
         
         next(error);
      }

   }

   async index(req:Request, res:Response, next:NextFunction){
  
      try {
         const product = await knex('product').select('*').orderBy('stock');
         return res.json(product);
      } catch (error) {
         next(error);
      }

   }

   async edit(req:Request, res:Response, next:NextFunction){

      try {
         const { id, name, price, stock, type } = req.body;
         await knex('product').where({id}).update({
            name,
            price,
            stock,
            type
         })
         return res.json({
            message_pt:"Produto editado com sucesso!",
            message:"Product successfully edited!"
         });
      } catch (error) {
         next(error);
      }

   }

   async delete(req:Request, res:Response, next:NextFunction){

      try {
         const { id } = req.query;
         await knex('product').where({id}).delete();
         return res.json({
            message_pt:"Produto deletado com sucesso!",
            message:"Product successfully deleted!"
         });
      } catch (error) {
         next(error);
      }

   }

   async stock(req:Request,res:Response, next:NextFunction){

      try {
         let { id, stock } = req.body;
         const [item] = await knex('product').where({id}).select("stock");
         stock += item.stock;
         await knex('product').where({id}).update({ stock });
         res.json({
            message_pt:"Produto estocado com sucesso!",
            message:"Product successfully stocked!"
         });
      } catch (error) {
         next(error);
      }

   }

   async discountStock(req:Request, res:Response, next:NextFunction){
      try {
         let ids = req.query.ids;
         ids = ids?.toString().split(",");
         ids?.forEach(async (id)=>{
            let stock = 0;
            const [item] = await knex('product').where({id}).select("stock");
            if(item.stock > 0) stock = item.stock - 1 ;
            await knex('product').where({id}).update({ stock });
         })
         res.json({
            message_pt:"Produto estocado com sucesso!",
            message:"Product successfully stocked!"
         });
      } catch (error) {
         next(error);
      }
   }
   
}
export default ProductController;