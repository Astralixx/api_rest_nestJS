import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorieEntity } from './categorie.entity/categorie.entity';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [TypeOrmModule.forFeature([CategorieEntity]), ProductsModule],
  providers: [CategoriesService],
  controllers: [CategoriesController]
})
export class CategoriesModule {}
