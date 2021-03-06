import express, {Request, Response, NextFunction} from 'express';
import routes from './routes';
import cors from 'cors';
interface ResponseError extends Error {
    status?: number;
  }
const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);    

app.use((error:ResponseError, req:Request, res:Response, next:NextFunction)=>{
    res.status(error.status || 500);
    res.json({
        message_pt: "Ocorreu um erro ao completar ação, tente novamente.",
        message: "An error occurred, please try again.",
        error: error.message
    });
})

app.listen(3333);