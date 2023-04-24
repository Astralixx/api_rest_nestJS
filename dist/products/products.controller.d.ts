import { ProductsService } from './products.service';
import { ProductEntity } from './product.entity/product.entity';
export declare class ProductsController {
    private service;
    constructor(service: ProductsService);
    getAll(params: any): Promise<ProductEntity[]>;
    get(params: any): Promise<ProductEntity>;
    create(product: ProductEntity): Promise<ProductEntity>;
    update(product: ProductEntity): Promise<void>;
    deleteUser(params: any): Promise<void>;
}
