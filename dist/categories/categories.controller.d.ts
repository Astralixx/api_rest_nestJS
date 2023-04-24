import { CategoriesService } from './categories.service';
import { CategorieEntity } from './categorie.entity/categorie.entity';
export declare class CategoriesController {
    private service;
    constructor(service: CategoriesService);
    getAll(params: any): Promise<CategorieEntity[]>;
    getProducts(params: any): Promise<import("../products/product.entity/product.entity").ProductEntity[]>;
    get(params: any): Promise<CategorieEntity>;
    create(categorie: CategorieEntity): Promise<void>;
    update(categorie: CategorieEntity): Promise<void>;
    deleteCategorie(params: any): Promise<void>;
}
