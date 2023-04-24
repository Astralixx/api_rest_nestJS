"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const categorie_entity_1 = require("./categorie.entity/categorie.entity");
const typeorm_2 = require("typeorm");
const products_service_1 = require("../products/products.service");
let CategoriesService = class CategoriesService {
    constructor(CategorieRepository, productsService) {
        this.CategorieRepository = CategorieRepository;
        this.productsService = productsService;
    }
    async getCategories() {
        return await this.CategorieRepository.find();
    }
    async getCategorie(_id) {
        return await this.CategorieRepository.findOneBy({ "id": _id });
    }
    async getCategorieProducts(_id) {
        return await this.productsService.getProductByCategorie(_id);
    }
    async createCategorie(categorie) {
        this.CategorieRepository.save(categorie);
    }
    async updateCategorie(categorie) {
        this.CategorieRepository.save(categorie);
    }
    async deleteCategorie(categorie) {
        this.CategorieRepository.delete(categorie);
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(categorie_entity_1.CategorieEntity)),
    __param(1, (0, common_1.Inject)(products_service_1.ProductsService)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        products_service_1.ProductsService])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map