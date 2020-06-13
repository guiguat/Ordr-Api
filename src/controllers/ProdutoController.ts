import knex from '../database/connection';
import { Request, Response, NextFunction } from 'express';
class ProdutoController{

   async create(req:Request,res:Response, next:NextFunction){
      
      const { nome, preco, estoque, tipo } = req.body;
      try {
         
         await knex('produto').insert({
            nome, 
            preco,
            estoque,
            tipo
         })

         return res.json({
               message: "Cadastro concluido!"
         });
      } catch (error) {
         next(error);
      }

   }

   async index(req:Request, res:Response, next:NextFunction){
  
      try {
         const produto = await knex('produto').select('*').orderBy('estoque');
         return res.json(produto);
      } catch (error) {
         next(error);
      }

   }

   async edit(req:Request, res:Response, next:NextFunction){

      try {
         const { id, nome, preco, estoque, tipo } = req.body;
         await knex('produto').where({id}).update({
            nome,
            preco,
            estoque,
            tipo
         })
         return res.json({message:"Informacoes editadas com sucesso!"});
      } catch (error) {
         next(error);
      }

   }

   async delete(req:Request, res:Response, next:NextFunction){

      try {
         const { id } = req.query;
         await knex('produto').where({id}).delete();
         return res.json({message:"Informacoes deletadas com sucesso!"});
      } catch (error) {
         next(error);
      }

   }

   async estoque(req:Request,res:Response, next:NextFunction){

      try {
         const { id, estoque } = req.body;
         await knex('produto').where({id}).update({ estoque });
         res.json({message:"Informacoes editadas com sucesso!"});
      } catch (error) {
          next(error);
      }

   }
}
export default ProdutoController;