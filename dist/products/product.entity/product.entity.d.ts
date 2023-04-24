import { CategorieEntity } from "src/categories/categorie.entity/categorie.entity";
export declare class ProductEntity {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    isactive: boolean;
    categorie: CategorieEntity;
}
