import express from 'express';

import ProductController from './controllers/ProductController';
import ReportController from './controllers/ReportController';
import AccountController from './controllers/AccountController';
import CostumerController from './controllers/CostumerController';
import SaleController from './controllers/SaleController';

const routes = express.Router();
const productController = new ProductController();
const reportController = new ReportController();
const accountController = new AccountController();
const costumerController = new CostumerController();
const saleController = new SaleController();

//products
routes.get('/product', productController.index);
routes.post('/product', productController.create);
routes.put('/product', productController.edit);
routes.put('/product/stock', productController.stock);
routes.put('/product/stock/discount', productController.discountStock);
routes.delete('/product', productController.delete);

//report
routes.get('/report', reportController.index);
routes.post('/report', reportController.open);
routes.put('/report', reportController.add);

// account
routes.get('/account', accountController.index);
routes.post('/account', accountController.create);
routes.delete('/account', accountController.delete);

// costumer
routes.get('/costumer', costumerController.index);
routes.post('/costumer', costumerController.create);
routes.put('/costumer', costumerController.edit);
routes.delete('/costumer', costumerController.delete);

// Sale
routes.get('/sale', saleController.index);
routes.post('/sale', saleController.create);

export default routes;