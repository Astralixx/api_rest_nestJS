import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategorieEntity } from './categorie.entity/categorie.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('categories')
export class CategoriesController {    
    constructor(private service: CategoriesService) { }


@Get()
getAll(@Param() params) {
    return this.service.getCategories();
}

@Get(':id/products')
getProducts(@Param() params){
    return this.service.getCategorieProducts(params.id);
}

@Get(':id')
get(@Param() params) {
    return this.service.getCategorie(params.id);
}

@UseGuards(AuthGuard('jwt-admin'))
@Post()
create(@Body() categorie: CategorieEntity) {
    return this.service.createCategorie(categorie);
}

@UseGuards(AuthGuard('jwt-admin'))
@Put()
update(@Body() categorie: CategorieEntity) {
    return this.service.updateCategorie(categorie);
}

@UseGuards(AuthGuard('jwt-admin'))
@Delete(':id')
deleteCategorie(@Param() params) {
    return this.service.deleteCategorie(params.id);
}}
