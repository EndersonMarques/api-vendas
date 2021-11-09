import { ProductRepository } from 'shared/typeorm/repositories/ProductsRepository';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';

interface IRequest {
    name: string;
    price: number;
    quantity: number;
}


class CreateProductService{
    public async execute({name, price, quantity}: IRequest): Promise<Product> {
        const productsRepository = getCustomRepository(ProductRepository);
        const prodictExists = await productsRepository.findByName(name);

        if (prodictExists) {
            throw new Error(`Product ${name} already exists`);
        }
        const product = productsRepository.create({
            name,
            price,
            quantity
        });

        await productsRepository.save(product);

        return product;
    }
}

export default CreateProductService;