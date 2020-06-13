import knex from '../database/connection';
import { Request, Response } from 'express';
class ProdutoController{
   async create(req:Request,res:Response){
      const { nome, preco, estoque, tipo } = req.body;

      await knex('produto').insert({
          nome, 
          preco,
          estoque,
          tipo
      })

      return res.json({
          message: "Cadastro concluido!"
      });
  }
  async index(req:Request, res:Response){
      if(req.query.id != undefined){
          const [produto] = await knex('produto').select('*').where({
              id: req.query.id
          });
          return res.json(produto);
      }
      else{
          const produto = await knex('produto').select('*').orderBy('estoque');
          return res.json(produto);
      }
      
  }
  async edit(req:Request, res:Response){
      let erro = null;
      try {
          const { id, nome, preco, estoque, tipo } = req.body;
          await knex('produto').where({id}).update({
              nome,
              preco,
              estoque,
              tipo
          })
      } catch (error) {
          erro = error;
          console.log(error);
      }
      return erro? res.json({message:"Erro ao editar informações"}) : res.json({message:"Informacoes editadas com sucesso!"});
  }
  async delete(req:Request, res:Response){
      const { id } = req.query;
      await knex('produto').where({id}).delete();
      return res.json({message:"Informacoes deletadas com sucesso!"});
  }
  async estoque(req:Request,res:Response){
      let erro = null;
      try {
          const { id, estoque } = req.body;
          await knex('produto').where({id}).update({ estoque })
      } catch (error) {
          erro = error;
          console.log(error);
      }
      return erro? res.json({message:"Erro ao editar informações"}) : res.json({message:"Informacoes editadas com sucesso!"});
  }
}
export default ProdutoController;