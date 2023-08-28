/* eslint-disable prettier/prettier */
import { Campaign } from 'src/campaigns/campaign.entity';
import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToMany, JoinTable } from 'typeorm';

@Entity()
@Index('idx_product_category', ['category'])
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  category: string;

  @Column()
  price: number;

  @Column()
  productSerialNumber: string;

  @ManyToMany(() => Campaign, (campaign) => campaign.id)
  @JoinTable()
  campaigns: number[];
}
