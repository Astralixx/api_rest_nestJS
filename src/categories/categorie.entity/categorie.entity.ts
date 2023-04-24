import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CategorieEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250 })
    name: string;

    @Column('text')
    description: string;
}
