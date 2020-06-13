import express from 'express';

import ProductController from './controllers/ProductController';
import OrderController from './controllers/OrderController';
import ReportController from './controllers/ReportController';

const routes = express.Router();
const productController = new ProductController();
const orderController = new OrderController();
const reportController = new ReportController();

//products
routes.get('/product', productController.index);
routes.post('/product', productController.create);
routes.put('/product', productController.edit);
routes.put('/product/stock', productController.stock);
routes.delete('/product', productController.delete);

//order
routes.post('/order', orderController.create);
routes.get('/order', orderController.index);
routes.delete('/order', orderController.delete);

//report
routes.get('/report', reportController.index);
routes.post('/report', reportController.open);
routes.put('/report', reportController.add);

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