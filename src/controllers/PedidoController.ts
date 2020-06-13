import knex from '../database/connection';
import { Request, Response, NextFunction } from 'express';

interface Pedido{
    id: number,
    nome: string,
    preco: number,
    estoque: number,
    tipo: string
}

class PedidoController{
    
    async create(req:Request,res:Response, next:NextFunction){

        try {

            const { mesa, pedidos, user } = req.body;
        
            pedidos.map(async (pedido:Pedido) => {
                if(pedido.tipo == 'prato'){
                    await knex('pedido').insert({
                        mesa,
                        pedidos:pedido.nome
                    })
                }
                else if(pedido.tipo == ''){
                    await knex('funcionario').insert({
                        pedidos:pedido.nome,
                        mesa,
                        user
                    })
                }
            })
            
            return res.json({ message: "Pedido enviado!" });

        } catch (error) {
            next(error);
        }

    }

    async index(req:Request, res:Response, next:NextFunction){
  
        try {
            const pedido = await knex('pedido').orderBy('dataHora');
            return res.json(pedido);
        } catch (error) {
            next(error);
        }

    }

    async delete(req:Request, res:Response, next:NextFunction){

        try {
            const { id } = req.query;
            await knex('pedido').where({ id }).delete();
            res.json({message:"pedido(s) deletado(s) com sucesso"});
        } catch (error) {
            next(error);
        }

    }
   
}
export default PedidoController;