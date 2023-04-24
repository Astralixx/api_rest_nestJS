import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategorieEntity } from './categorie.entity/categorie.entity';
import { Repository } from 'typeorm';
import { ProductsService } from 'src/products/products.service';
import { ProductEntity } from 'src/products/product.entity/product.entity';

@Injectable()
export class CategoriesService {

    constructor(@InjectRepository(CategorieEntity) private CategorieRepository: Repository<CategorieEntity>,
                @Inject(ProductsService) private productsService: ProductsService) { }


    async getCategories(): Promise<CategorieEntity[]> {
        return await this.CategorieRepository.find();
    }

    async getCategorie(_id: number): Promise<CategorieEntity> {
        return await this.CategorieRepository.findOneBy({ "id": _id });
    }

    async getCategorieProducts(_id: number): Promise<ProductEntity[]> {
        return await this.productsService.getProductByCategorie(_id);
    }


    async createCategorie(categorie: CategorieEntity) {
        this.CategorieRepository.save(categorie)
    }


    async updateCategorie(categorie: CategorieEntity) {
        this.CategorieRepository.save(categorie)
    }

    async deleteCategorie(categorie: CategorieEntity) {
        this.CategorieRepository.delete(categorie);
    }
}
