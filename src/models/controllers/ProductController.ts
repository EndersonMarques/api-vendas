import { Request, Response } from 'express';

import CreateProductService from '../products/services/CreateProductService';
import DeleteProductService from '../products/services/DeleteProductService';
import ListProductService from '../products/services/ListProductService';
import ShowProductService from '../products/services/ShowProductService';
import UpdateProductService from '../products/services/UpdateProductService';

export default class ProductsController{

    public async index(req: Request, res: Response): Promise<Response>{
        const ListProducts = new ListProductService();

        const products = await ListProducts.execute();

        return res.json(products);
    }

    public async show(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;
        const ShowProduct = new ShowProductService();

        const product = await ShowProduct.execute({ id });
        
        return res.json(product);
    }

    public async create(req: Request, res: Response): Promise<Response>{
        
        const { name, price, quantity } = req.body;
        
        const createProduct = new CreateProductService();

        const product = await createProduct.execute({ name, price, quantity });

        return res.json(product);
    }

    public async update(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;
        const { name, price, quantity } = req.body;

        const updateProduct = new UpdateProductService();
        const product = await updateProduct.execute({ id, name, price, quantity });

        return res.json(product);

    }

    public async delete(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;
        const deleteProduct = new DeleteProductService();

        await deleteProduct.execute({ id });

        return res.json([]);
    }

}