import { getCustomRepository } from 'typeorm'

import { ProductRepository } from '../../../shared/typeorm/repositories/ProductsRepository';
import Product from '../typeorm/entities/Product';

interface IRequest{
    id: string;
    name: string;
    price: number;
    quantity: number;
}


class UpdateProductService{
    public async execute({id, name, price, quantity}: IRequest): Promise<Product> {
        
        const productsRepository = getCustomRepository(ProductRepository);

        const product = await productsRepository.findOne(id);
        
        if (!product) {
            throw new Error('Product not found');
        }

        const prodictExists = await productsRepository.findByName(name);

        if (prodictExists) {
            throw new Error(`Product ${name} already exists`);
        }

        product.name = name;
        product.price = price;
        product.quantity = quantity;

        await productsRepository.save(product);

        return product;
    }
}

export default UpdateProductService;