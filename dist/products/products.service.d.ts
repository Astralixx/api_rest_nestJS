import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity/product.entity';
export declare class ProductsService {
    private productsRepository;
    constructor(productsRepository: Repository<ProductEntity>);
    getProducts(): Promise<ProductEntity[]>;
    getProduct(_id: number): Promise<ProductEntity>;
    getProductByCategorie(_id: number): Promise<ProductEntity[]>;
    createProduct(product: ProductEntity): Promise<ProductEntity>;
    updateProduct(product: ProductEntity): Promise<void>;
    deleteProduct(product: ProductEntity): Promise<void>;
}
