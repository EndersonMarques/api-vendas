import Router,{ Request, Response } from 'express';

import productsRouter from '../models/products/routes/products.routes';

const router = Router();

router.use('/products', productsRouter);


export default router;