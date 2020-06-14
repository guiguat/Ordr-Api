import express from 'express';

import ProductController from './controllers/ProductController';
import OrderController from './controllers/OrderController';
import ReportController from './controllers/ReportController';
import EmployeeController from './controllers/EmployeeController';
import AccountController from './controllers/AccountController';
import CostumerController from './controllers/CostumerController';

const routes = express.Router();
const productController = new ProductController();
const orderController = new OrderController();
const reportController = new ReportController();
const employeeController = new EmployeeController();
const accountController = new AccountController();
const costumerController = new CostumerController();

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

// employee
routes.delete('/employee', employeeController.delete);
routes.get('/employee', employeeController.index);

// account
routes.get('/account', accountController.index);
routes.post('/account', accountController.create);
routes.delete('/account', accountController.delete);

// costumer
routes.get('/costumer', costumerController.index);
routes.post('/costumer', costumerController.create);
routes.put('/costumer', costumerController.edit);
routes.delete('/costumer', costumerController.delete);


export default routes;