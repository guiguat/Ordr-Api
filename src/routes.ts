import express from 'express';

import ProdutoController from './controllers/ProdutoController';


const routes = express.Router();
const produtoController = new ProdutoController();

//produtos
routes.get('/produto', produtoController.index);
routes.post('/produto', produtoController.create);
routes.put('/produto', produtoController.edit);
routes.put('/produto/estoque', produtoController.estoque);
routes.delete('/produto', produtoController.delete);

// //pedido
// routes.post('/pedido', pedidoController.create);
// routes.get('/pedido', pedidoController.index);
// routes.delete('/pedido', pedidoController.delete);

// //relatorio
// routes.get('/relatorio', relatorioController.index);
// routes.post('/relatorio', relatorioController.abrir);
// routes.put('/relatorio', relatorioController.add);

// // Funcionario
// routes.delete('/funcionario', funcionarioController.delete);
// routes.get('/funcionario', funcionarioController.index);

// // Contas
// routes.get('/contas', contasController.index);
// routes.post('/contas', contasController.create);
// routes.delete('/contas', contasController.delete);

// // Cliente
// routes.get('/cliente', clienteController.index);
// routes.post('/cliente', clienteController.create);
// routes.put('/cliente', clienteController.edit);
// routes.delete('/cliente', clienteController.delete);


export default routes;