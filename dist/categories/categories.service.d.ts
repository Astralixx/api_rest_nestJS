import { CategorieEntity } from './categorie.entity/categorie.entity';
import { Repository } from 'typeorm';
import { ProductsService } from 'src/products/products.service';
import { ProductEntity } from 'src/products/product.entity/product.entity';
export declare class CategoriesService {
    private CategorieRepository;
    private productsService;
    constructor(CategorieRepository: Repository<CategorieEntity>, productsService: ProductsService);
    getCategories(): Promise<CategorieEntity[]>;
    getCategorie(_id: number): Promise<CategorieEntity>;
    getCategorieProducts(_id: number): Promise<ProductEntity[]>;
    createCategorie(categorie: CategorieEntity): Promise<void>;
    updateCategorie(categorie: CategorieEntity): Promise<void>;
    deleteCategorie(categorie: CategorieEntity): Promise<void>;
}
