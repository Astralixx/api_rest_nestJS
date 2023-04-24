import { CategorieEntity } from "src/categories/categorie.entity/categorie.entity";
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length: 250})
    name:string;

    @Column('longtext')
    description:string;

    @Column('longtext')
    image: string;

    @Column('decimal', {precision: 6, scale: 2})
    price: number;

    @Column()
    isactive: boolean;

    @ManyToOne(categorie => CategorieEntity, role => role.id)
    @JoinColumn({name: 'categorie'})
    categorie: CategorieEntity;

}
