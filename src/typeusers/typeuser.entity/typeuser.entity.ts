import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TypeUserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 45 })
    name:string;
}
