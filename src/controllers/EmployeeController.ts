import knex from '../database/connection';
import { Request, Response, NextFunction } from 'express';

class EmployeeController{

    async index(req:Request, res:Response, next:NextFunction){

        try {

            const user  = req.query.user;

            const employeeRequests = await knex('employee').orderBy('id').where({ user });

            return res.json(employeeRequests); 

        } catch (error) {
            next(error);
        }

    }

    async delete(req:Request, res:Response, next:NextFunction){

        try {
            const id:any = req.query.id;  
            let idArr = id.replace(/\s/g, "").split(',');
            idArr.map(async (item:string)=>await knex('employee').where({ id:parseInt(item) }).delete())
            return res.json({
                message_pt:"Pedido(s) deletado(s) com sucesso!",
                message:"Order(s) successfully deleted!"
            });
        } catch (error) {
            next(error);
        }

    }
   
}
export default EmployeeController;