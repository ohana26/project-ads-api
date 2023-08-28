/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Product } from '../products/product.entity';

@Entity()
export class Campaign {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    startDate: Date;

    @Column()
    bid: number;

    @Column()
    isActive: boolean;

    @ManyToMany(() => Product, (product) => product.id)
    @JoinTable()
    products: number[];
}
